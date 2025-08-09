/**
 * Package Name Reader
 * A utility to read package names from various package management systems
 */

const fs = require('fs');
const path = require('path');

class PackageReader {
  constructor(projectPath = process.cwd()) {
    this.projectPath = projectPath;
  }

  /**
   * Read package name from package.json (Node.js/npm)
   */
  readNpmPackageName() {
    try {
      const packagePath = path.join(this.projectPath, 'package.json');
      if (!fs.existsSync(packagePath)) {
        return null;
      }
      
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      return {
        name: packageData.name,
        version: packageData.version,
        type: 'npm',
        description: packageData.description || null
      };
    } catch (error) {
      console.error('Error reading package.json:', error.message);
      return null;
    }
  }

  /**
   * Read package name from Cargo.toml (Rust)
   */
  readCargoPackageName() {
    try {
      const cargoPath = path.join(this.projectPath, 'Cargo.toml');
      if (!fs.existsSync(cargoPath)) {
        return null;
      }
      
      const cargoContent = fs.readFileSync(cargoPath, 'utf8');
      
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
      console.error('Error reading Cargo.toml:', error.message);
      return null;
    }
  }

  /**
   * Read package name from pyproject.toml or setup.py (Python)
   */
  readPythonPackageName() {
    // Try pyproject.toml first
    try {
      const pyprojectPath = path.join(this.projectPath, 'pyproject.toml');
      if (fs.existsSync(pyprojectPath)) {
        const content = fs.readFileSync(pyprojectPath, 'utf8');
        
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
      console.error('Error reading pyproject.toml:', error.message);
    }

    // Try setup.py as fallback
    try {
      const setupPath = path.join(this.projectPath, 'setup.py');
      if (fs.existsSync(setupPath)) {
        const content = fs.readFileSync(setupPath, 'utf8');
        
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
      console.error('Error reading setup.py:', error.message);
    }

    return null;
  }

  /**
   * Read package name from composer.json (PHP)
   */
  readComposerPackageName() {
    try {
      const composerPath = path.join(this.projectPath, 'composer.json');
      if (!fs.existsSync(composerPath)) {
        return null;
      }
      
      const composerData = JSON.parse(fs.readFileSync(composerPath, 'utf8'));
      return {
        name: composerData.name,
        version: composerData.version || null,
        type: 'composer',
        description: composerData.description || null
      };
    } catch (error) {
      console.error('Error reading composer.json:', error.message);
      return null;
    }
  }

  /**
   * Read package name from pubspec.yaml (Dart/Flutter)
   */
  readDartPackageName() {
    try {
      const pubspecPath = path.join(this.projectPath, 'pubspec.yaml');
      if (!fs.existsSync(pubspecPath)) {
        return null;
      }
      
      const content = fs.readFileSync(pubspecPath, 'utf8');
      
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
      console.error('Error reading pubspec.yaml:', error.message);
      return null;
    }
  }

  /**
   * Read package name from go.mod (Go)
   */
  readGoPackageName() {
    try {
      const goModPath = path.join(this.projectPath, 'go.mod');
      if (!fs.existsSync(goModPath)) {
        return null;
      }
      
      const content = fs.readFileSync(goModPath, 'utf8');
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
      console.error('Error reading go.mod:', error.message);
      return null;
    }
  }

  /**
   * Attempt to read package name from all supported package managers
   */
  readPackageName() {
    const readers = [
      this.readNpmPackageName.bind(this),
      this.readCargoPackageName.bind(this),
      this.readPythonPackageName.bind(this),
      this.readComposerPackageName.bind(this),
      this.readDartPackageName.bind(this),
      this.readGoPackageName.bind(this)
    ];

    const results = [];
    
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
  getPrimaryPackageName() {
    const results = this.readPackageName();
    return results ? results[0] : null;
  }

  /**
   * Check if a project has multiple package managers
   */
  hasMultiplePackageManagers() {
    const results = this.readPackageName();
    return results ? results.length > 1 : false;
  }
}

// Example usage
if (require.main === module) {
  const reader = new PackageReader();
  
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
    console.log(`\n✅ Primary package: ${primary.name} (${primary.type})`);
  } else {
    console.log('❌ No package configuration found in this directory');
    console.log('   Supported formats: package.json, Cargo.toml, pyproject.toml, setup.py, composer.json, pubspec.yaml, go.mod');
  }
}

module.exports = PackageReader;