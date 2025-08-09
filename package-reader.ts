/**
 * Package Name Reader (TypeScript version)
 * A utility to read package names from various package management systems
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface PackageInfo {
  name: string;
  version: string | null;
  type: string;
  description: string | null;
}

export class PackageReader {
  private projectPath: string;

  constructor(projectPath: string = process.cwd()) {
    this.projectPath = projectPath;
  }

  /**
   * Read package name from package.json (Node.js/npm)
   */
  readNpmPackageName(): PackageInfo | null {
    try {
      const packagePath = join(this.projectPath, 'package.json');
      if (!existsSync(packagePath)) {
        return null;
      }
      
      const packageData = JSON.parse(readFileSync(packagePath, 'utf8'));
      return {
        name: packageData.name,
        version: packageData.version,
        type: 'npm',
        description: packageData.description || null
      };
    } catch (error) {
      console.error('Error reading package.json:', (error as Error).message);
      return null;
    }
  }

  /**
   * Read package name from Cargo.toml (Rust)
   */
  readCargoPackageName(): PackageInfo | null {
    try {
      const cargoPath = join(this.projectPath, 'Cargo.toml');
      if (!existsSync(cargoPath)) {
        return null;
      }
      
      const cargoContent = readFileSync(cargoPath, 'utf8');
      
      // Simple TOML parsing for name and version
      const nameMatch = cargoContent.match(/^name\s*=\s*["']([^"']+)["']/m);
      const versionMatch = cargoContent.match(/^version\s*=\s*["']([^"']+)["']/m);
      const descriptionMatch = cargoContent.match(/^description\s*=\s*["']([^"']+)["']/m);
      
      if (nameMatch) {
        return {
          name: nameMatch[1],
          version: versionMatch ? versionMatch[1] : null,
          type: 'cargo',
          description: descriptionMatch ? descriptionMatch[1] : null
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error reading Cargo.toml:', (error as Error).message);
      return null;
    }
  }

  /**
   * Read package name from pyproject.toml or setup.py (Python)
   */
  readPythonPackageName(): PackageInfo | null {
    // Try pyproject.toml first
    try {
      const pyprojectPath = join(this.projectPath, 'pyproject.toml');
      if (existsSync(pyprojectPath)) {
        const content = readFileSync(pyprojectPath, 'utf8');
        
        const nameMatch = content.match(/^name\s*=\s*["']([^"']+)["']/m);
        const versionMatch = content.match(/^version\s*=\s*["']([^"']+)["']/m);
        const descriptionMatch = content.match(/^description\s*=\s*["']([^"']+)["']/m);
        
        if (nameMatch) {
          return {
            name: nameMatch[1],
            version: versionMatch ? versionMatch[1] : null,
            type: 'python-pyproject',
            description: descriptionMatch ? descriptionMatch[1] : null
          };
        }
      }
    } catch (error) {
      console.error('Error reading pyproject.toml:', (error as Error).message);
    }

    // Try setup.py as fallback
    try {
      const setupPath = join(this.projectPath, 'setup.py');
      if (existsSync(setupPath)) {
        const content = readFileSync(setupPath, 'utf8');
        
        const nameMatch = content.match(/name\s*=\s*["']([^"']+)["']/);
        const versionMatch = content.match(/version\s*=\s*["']([^"']+)["']/);
        
        if (nameMatch) {
          return {
            name: nameMatch[1],
            version: versionMatch ? versionMatch[1] : null,
            type: 'python-setup',
            description: null
          };
        }
      }
    } catch (error) {
      console.error('Error reading setup.py:', (error as Error).message);
    }

    return null;
  }

  /**
   * Read package name from composer.json (PHP)
   */
  readComposerPackageName(): PackageInfo | null {
    try {
      const composerPath = join(this.projectPath, 'composer.json');
      if (!existsSync(composerPath)) {
        return null;
      }
      
      const composerData = JSON.parse(readFileSync(composerPath, 'utf8'));
      return {
        name: composerData.name,
        version: composerData.version || null,
        type: 'composer',
        description: composerData.description || null
      };
    } catch (error) {
      console.error('Error reading composer.json:', (error as Error).message);
      return null;
    }
  }

  /**
   * Read package name from pubspec.yaml (Dart/Flutter)
   */
  readDartPackageName(): PackageInfo | null {
    try {
      const pubspecPath = join(this.projectPath, 'pubspec.yaml');
      if (!existsSync(pubspecPath)) {
        return null;
      }
      
      const content = readFileSync(pubspecPath, 'utf8');
      
      const nameMatch = content.match(/^name:\s*(.+)$/m);
      const versionMatch = content.match(/^version:\s*(.+)$/m);
      const descriptionMatch = content.match(/^description:\s*(.+)$/m);
      
      if (nameMatch) {
        return {
          name: nameMatch[1].trim(),
          version: versionMatch ? versionMatch[1].trim() : null,
          type: 'dart',
          description: descriptionMatch ? descriptionMatch[1].trim() : null
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error reading pubspec.yaml:', (error as Error).message);
      return null;
    }
  }

  /**
   * Read package name from go.mod (Go)
   */
  readGoPackageName(): PackageInfo | null {
    try {
      const goModPath = join(this.projectPath, 'go.mod');
      if (!existsSync(goModPath)) {
        return null;
      }
      
      const content = readFileSync(goModPath, 'utf8');
      const lines = content.split('\n');
      
      for (const line of lines) {
        if (line.startsWith('module ')) {
          const moduleName = line.substring(7).trim();
          return {
            name: moduleName,
            version: null, // Go modules use git tags for versions
            type: 'go',
            description: null
          };
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error reading go.mod:', (error as Error).message);
      return null;
    }
  }

  /**
   * Attempt to read package name from all supported package managers
   */
  readPackageName(): PackageInfo[] | null {
    const readers = [
      this.readNpmPackageName.bind(this),
      this.readCargoPackageName.bind(this),
      this.readPythonPackageName.bind(this),
      this.readComposerPackageName.bind(this),
      this.readDartPackageName.bind(this),
      this.readGoPackageName.bind(this)
    ];

    const results: PackageInfo[] = [];
    
    for (const reader of readers) {
      const result = reader();
      if (result) {
        results.push(result);
      }
    }

    return results.length > 0 ? results : null;
  }

  /**
   * Get the primary package name (first found)
   */
  getPrimaryPackageName(): PackageInfo | null {
    const results = this.readPackageName();
    return results ? results[0] : null;
  }

  /**
   * Check if a project has multiple package managers
   */
  hasMultiplePackageManagers(): boolean {
    const results = this.readPackageName();
    return results ? results.length > 1 : false;
  }

  /**
   * Get package info by type
   */
  getPackageByType(type: string): PackageInfo | null {
    const results = this.readPackageName();
    if (!results) return null;
    
    return results.find(pkg => pkg.type === type) || null;
  }

  /**
   * Get all package types found in the project
   */
  getPackageTypes(): string[] {
    const results = this.readPackageName();
    if (!results) return [];
    
    return results.map(pkg => pkg.type);
  }
}

// Example usage function
export const demonstratePackageReader = (projectPath?: string): void => {
  const reader = new PackageReader(projectPath);
  
  console.log('🔍 Searching for package information...\n');
  
  const allPackages = reader.readPackageName();
  
  if (allPackages) {
    console.log('📦 Found package information:');
    allPackages.forEach((pkg, index) => {
      console.log(`\n${index + 1}. ${pkg.type.toUpperCase()} Package:`);
      console.log(`   Name: ${pkg.name}`);
      console.log(`   Version: ${pkg.version || 'Not specified'}`);
      if (pkg.description) {
        console.log(`   Description: ${pkg.description}`);
      }
    });
    
    if (reader.hasMultiplePackageManagers()) {
      console.log('\n⚠️  Multiple package managers detected!');
    }
    
    const primary = reader.getPrimaryPackageName();
    if (primary) {
      console.log(`\n✅ Primary package: ${primary.name} (${primary.type})`);
    }
  } else {
    console.log('❌ No package configuration found in this directory');
    console.log('   Supported formats: package.json, Cargo.toml, pyproject.toml, setup.py, composer.json, pubspec.yaml, go.mod');
  }
};

export default PackageReader;