/**
 * Test script for PackageReader
 * Creates sample package files and tests the reader functionality
 */

const fs = require('fs');
const path = require('path');
const PackageReader = require('./package-reader');

// Create test directory
const testDir = path.join(__dirname, 'test-packages');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

// Clean up any existing test files
const cleanup = () => {
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
};

// Create sample package files for testing
const createSampleFiles = () => {
  // Sample package.json
  const packageJson = {
    name: "focusflow",
    version: "1.0.0",
    description: "A GTD-inspired task management application",
    main: "src/index.js",
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      react: "^18.0.0",
      zustand: "^4.0.0"
    }
  };
  fs.writeFileSync(path.join(testDir, 'package.json'), JSON.stringify(packageJson, null, 2));

  // Sample Cargo.toml
  const cargoToml = `[package]
name = "focusflow-rs"
version = "0.1.0"
description = "A GTD task manager written in Rust"
edition = "2021"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }`;
  fs.writeFileSync(path.join(testDir, 'Cargo.toml'), cargoToml);

  // Sample pyproject.toml
  const pyprojectToml = `[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "focusflow-py"
version = "1.0.0"
description = "GTD task manager in Python"
dependencies = [
    "fastapi",
    "pydantic",
]`;
  fs.writeFileSync(path.join(testDir, 'pyproject.toml'), pyprojectToml);

  // Sample composer.json
  const composerJson = {
    name: "focusflow/php-app",
    version: "2.1.0",
    description: "FocusFlow task management in PHP",
    require: {
      "php": ">=8.0",
      "illuminate/database": "^10.0"
    }
  };
  fs.writeFileSync(path.join(testDir, 'composer.json'), JSON.stringify(composerJson, null, 2));

  // Sample pubspec.yaml
  const pubspecYaml = `name: focusflow_flutter
version: 1.0.0+1
description: FocusFlow mobile app built with Flutter

dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.0`;
  fs.writeFileSync(path.join(testDir, 'pubspec.yaml'), pubspecYaml);

  // Sample go.mod
  const goMod = `module github.com/user/focusflow-go

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/gorilla/websocket v1.5.0
)`;
  fs.writeFileSync(path.join(testDir, 'go.mod'), goMod);
};

// Test function
const runTests = () => {
  console.log('🧪 Testing PackageReader with various package formats...\n');

  createSampleFiles();

  const reader = new PackageReader(testDir);
  
  console.log('📋 Individual package manager tests:');
  console.log('=====================================\n');

  // Test NPM
  const npmResult = reader.readNpmPackageName();
  console.log('📦 NPM (package.json):');
  console.log(npmResult ? `   ✅ ${npmResult.name} v${npmResult.version}` : '   ❌ Not found');
  
  // Test Cargo
  const cargoResult = reader.readCargoPackageName();
  console.log('\n🦀 Cargo (Cargo.toml):');
  console.log(cargoResult ? `   ✅ ${cargoResult.name} v${cargoResult.version}` : '   ❌ Not found');
  
  // Test Python
  const pythonResult = reader.readPythonPackageName();
  console.log('\n🐍 Python (pyproject.toml):');
  console.log(pythonResult ? `   ✅ ${pythonResult.name} v${pythonResult.version}` : '   ❌ Not found');
  
  // Test Composer
  const composerResult = reader.readComposerPackageName();
  console.log('\n🐘 PHP Composer (composer.json):');
  console.log(composerResult ? `   ✅ ${composerResult.name} v${composerResult.version}` : '   ❌ Not found');
  
  // Test Dart
  const dartResult = reader.readDartPackageName();
  console.log('\n🎯 Dart/Flutter (pubspec.yaml):');
  console.log(dartResult ? `   ✅ ${dartResult.name} v${dartResult.version}` : '   ❌ Not found');
  
  // Test Go
  const goResult = reader.readGoPackageName();
  console.log('\n🐹 Go (go.mod):');
  console.log(goResult ? `   ✅ ${goResult.name} ${goResult.version || '(no version)'}` : '   ❌ Not found');

  console.log('\n\n🔍 Combined package detection:');
  console.log('===============================\n');

  const allPackages = reader.readPackageName();
  if (allPackages) {
    console.log(`✅ Found ${allPackages.length} package configuration(s):\n`);
    
    allPackages.forEach((pkg, index) => {
      console.log(`${index + 1}. ${pkg.type.toUpperCase()}: ${pkg.name}`);
      if (pkg.version) console.log(`   Version: ${pkg.version}`);
      if (pkg.description) console.log(`   Description: ${pkg.description}`);
      console.log();
    });

    if (reader.hasMultiplePackageManagers()) {
      console.log('⚠️  Multiple package managers detected in this project!');
    }

    const primary = reader.getPrimaryPackageName();
    console.log(`🎯 Primary package: ${primary.name} (${primary.type})`);
  } else {
    console.log('❌ No package configurations found');
  }

  // Test with a directory that has no package files
  console.log('\n\n🚫 Testing with empty directory:');
  console.log('=================================\n');
  
  const emptyDir = path.join(testDir, 'empty');
  fs.mkdirSync(emptyDir, { recursive: true });
  
  const emptyReader = new PackageReader(emptyDir);
  const emptyResult = emptyReader.readPackageName();
  console.log(emptyResult ? '❌ Unexpected result' : '✅ Correctly detected no package files');

  cleanup();
  console.log('\n✨ All tests completed! Test files cleaned up.');
};

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests, createSampleFiles, cleanup };