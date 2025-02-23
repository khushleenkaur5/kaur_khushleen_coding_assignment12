# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /lastName_firstName_ui_garden

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Use a minimal Node.js image to serve the production build
FROM node:18-slim

# Set working directory
WORKDIR /usr/share/app

# Install serve to serve the production build
RUN npm install -g serve

# Copy the production build from the build stage
COPY --from=build /kaur_khushleen_ui_garden/build /usr/share/app

# Expose port 8083
EXPOSE 8083

# Start the app
CMD ["npm", "run", "storybook"]
