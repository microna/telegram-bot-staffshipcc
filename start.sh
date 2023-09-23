#!/bin/bash

# Install Backend Dependencies
echo "Installing Backend Dependencies..."
(cd backend && yarn install)
echo "Backend Dependencies Installed"

# Lint Backend
echo "Linting Backend..."
(cd backend && yarn lint)
echo "Backend Linting Complete"

# Install Frontend Dependencies
echo "Installing Frontend Dependencies..."
(cd frontend && yarn install)
echo "Frontend Dependencies Installed"

# Lint Frontend
echo "Linting Frontend..."
(cd frontend && yarn lint)
echo "Frontend Linting Complete"

# Build Frontend
echo "Building Frontend..."
(cd frontend && yarn build)
echo "Frontend Build Complete"

# Copy Build to Backend Public Folder
echo "Copying Build to Backend Public Folder..."
cp -r frontend/build/* backend/public/
echo "Copy Complete"