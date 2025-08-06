# Components Structure

This directory contains all the React components for the Cloud Cost Estimator application.

## Component Overview

### `Header.jsx`
- Displays the application title and subtitle
- Contains the cloud icon and main heading

### `BackgroundDecoration.jsx`
- Renders animated cloud decorations in the background
- Provides the visual cloud theme

### `ResourceConfiguration.jsx`
- Manages the resource configuration section
- Contains multiple ResourceRow components
- Handles adding/removing resource rows

### `ResourceRow.jsx`
- Individual resource configuration row
- Contains fields for resource type, count, and region
- Includes remove button functionality

### `BusinessRequirements.jsx`
- Textarea for business requirements input
- Simple form component for user requirements

### `CostEstimate.jsx`
- Displays the calculated cost estimate
- Shows total cost and cost breakdown
- Conditional rendering (only shows when estimate exists)

## Usage

All components are imported and used in the main `App.jsx` file. The components follow a modular structure where each component has a single responsibility and can be easily tested and maintained.

## Props

Each component receives specific props for data and event handlers, making them reusable and testable. 