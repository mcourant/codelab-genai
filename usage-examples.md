# Package Reader Usage Examples

This document demonstrates how to use the PackageReader utility to read package names from various package management systems.

## Installation

Copy either `package-reader.js` (JavaScript) or `package-reader.ts` (TypeScript) to your project.

For TypeScript, you may need these dependencies:
```bash
npm install --save-dev @types/node
```

## Basic Usage

### JavaScript
```javascript
const PackageReader = require('./package-reader');

const reader = new PackageReader();

// Get all package information
const packages = reader.readPackageName();
console.log(packages);

// Get primary package only
const primary = reader.getPrimaryPackageName();
console.log(`Primary: ${primary.name} (${primary.type})`);
```

### TypeScript
```typescript
import { PackageReader } from './package-reader';

const reader = new PackageReader();

// Get all package information
const packages = reader.readPackageName();
console.log(packages);

// Get primary package only
const primary = reader.getPrimaryPackageName();
console.log(`Primary: ${primary?.name} (${primary?.type})`);
```

## Integration with FocusFlow

Here's how you could integrate the package reader into the FocusFlow application:

### 1. Project Info Component

```typescript
// components/ProjectInfo.tsx
import React, { useEffect, useState } from 'react';
import { PackageReader } from '../utils/package-reader';

interface PackageInfo {
  name: string;
  version: string | null;
  type: string;
  description: string | null;
}

export default function ProjectInfo() {
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);

  useEffect(() => {
    const reader = new PackageReader();
    const primary = reader.getPrimaryPackageName();
    setPackageInfo(primary);
  }, []);

  if (!packageInfo) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-2">Project Information</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-medium">Name:</span> {packageInfo.name}
        </div>
        <div>
          <span className="font-medium">Version:</span> {packageInfo.version || 'N/A'}
        </div>
        <div>
          <span className="font-medium">Type:</span> {packageInfo.type.toUpperCase()}
        </div>
        {packageInfo.description && (
          <div className="col-span-2">
            <span className="font-medium">Description:</span> {packageInfo.description}
          </div>
        )}
      </div>
    </div>
  );
}
```

### 2. Build Information Service

```typescript
// services/buildInfo.ts
import { PackageReader } from '../utils/package-reader';

export class BuildInfoService {
  private static reader = new PackageReader();

  static getProjectInfo() {
    return this.reader.getPrimaryPackageName();
  }

  static getBuildMetadata() {
    const packageInfo = this.getProjectInfo();
    return {
      projectName: packageInfo?.name || 'Unknown Project',
      version: packageInfo?.version || 'Unknown Version',
      buildTime: new Date().toISOString(),
      packageManager: packageInfo?.type || 'unknown'
    };
  }

  static generateBuildId() {
    const info = this.getProjectInfo();
    const timestamp = Date.now();
    return `${info?.name || 'app'}-${info?.version || '0.0.0'}-${timestamp}`;
  }
}
```

### 3. Development Tools Integration

```typescript
// utils/devTools.ts
import { PackageReader } from './package-reader';

export class DevTools {
  private static reader = new PackageReader();

  static logProjectInfo() {
    const packages = this.reader.readPackageName();
    
    if (packages) {
      console.log('%c📦 Project Information', 'color: #2563eb; font-weight: bold; font-size: 14px;');
      packages.forEach(pkg => {
        console.log(`${pkg.type.toUpperCase()}: ${pkg.name} v${pkg.version || 'unknown'}`);
      });
      
      if (this.reader.hasMultiplePackageManagers()) {
        console.warn('⚠️ Multiple package managers detected!');
      }
    }
  }

  static validateEnvironment() {
    const packageInfo = this.reader.getPrimaryPackageName();
    
    const issues = [];
    
    if (!packageInfo) {
      issues.push('No package configuration found');
    } else {
      if (!packageInfo.version) {
        issues.push('No version specified in package configuration');
      }
      
      if (!packageInfo.description) {
        issues.push('No description in package configuration');
      }
    }
    
    return {
      isValid: issues.length === 0,
      issues,
      packageInfo
    };
  }
}

// Initialize dev tools in development mode
if (process.env.NODE_ENV === 'development') {
  DevTools.logProjectInfo();
  const validation = DevTools.validateEnvironment();
  
  if (!validation.isValid) {
    console.warn('Development environment validation failed:', validation.issues);
  }
}
```

## CLI Usage Examples

### Simple CLI Tool
```javascript
#!/usr/bin/env node
const PackageReader = require('./package-reader');

const args = process.argv.slice(2);
const projectPath = args[0] || process.cwd();

const reader = new PackageReader(projectPath);
reader.readPackageName(); // This will output the results automatically when run as main module
```

### Advanced CLI with Options
```bash
# Read current directory
node package-reader.js

# Read specific directory
node package-reader.js /path/to/project

# Get only the primary package name
node -e "const PackageReader = require('./package-reader'); const reader = new PackageReader(); const primary = reader.getPrimaryPackageName(); console.log(primary ? primary.name : 'No package found');"
```

## Supported Package Managers

| Package Manager | File | Language/Platform |
|-----------------|------|-------------------|
| npm/yarn/pnpm | `package.json` | Node.js/JavaScript |
| Cargo | `Cargo.toml` | Rust |
| pip | `pyproject.toml`, `setup.py` | Python |
| Composer | `composer.json` | PHP |
| Pub | `pubspec.yaml` | Dart/Flutter |
| Go Modules | `go.mod` | Go |

## Error Handling

The PackageReader includes built-in error handling:

```typescript
const reader = new PackageReader('/invalid/path');
const result = reader.readPackageName(); // Returns null, doesn't throw

// Individual methods also return null on error
const npmResult = reader.readNpmPackageName(); // null if no package.json or invalid JSON
```

## TypeScript Types

```typescript
interface PackageInfo {
  name: string;              // Package name
  version: string | null;    // Version (null if not specified)
  type: string;             // Package manager type
  description: string | null; // Description (null if not available)
}
```

## Performance Notes

- File system operations are synchronous for simplicity
- Only reads files when needed (checks existence first)
- Minimal regex parsing for non-JSON formats
- No external dependencies required

## Future Enhancements

Potential improvements:
- Async/Promise-based API
- More sophisticated TOML/YAML parsing
- Package lock file analysis
- Dependency tree information
- Custom package manager support