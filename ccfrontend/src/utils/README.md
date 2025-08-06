# Utils Structure

This directory contains utility functions and constants for the Cloud Cost Estimator application.

## Files Overview

### `constants.js`
- Contains application constants
- Resource types (Compute, Database, Storage)
- AWS regions list
- Centralized data management

### `costCalculator.js`
- Contains cost calculation logic
- Mock estimation function
- Can be extended for real API integration

## Usage

These utilities are imported and used throughout the application to maintain consistency and reduce code duplication.

## Extending

- Add new resource types in `constants.js`
- Implement real cost calculation logic in `costCalculator.js`
- Add new utility functions as needed 