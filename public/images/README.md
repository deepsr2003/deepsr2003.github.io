# Portfolio Images

## Required Images for Projects:

### 1. High-Frequency Matching Engine
- **File**: `images/orderbook.png`
- **Content**: Architecture diagram showing:
  - Input → Matching Logic → Order Book → Output
  - Lock-free data structures
  - L1/L2 cache optimization
- **Style**: Dark theme with purple accents

### 2. Options Strategy Visualizer  
- **File**: `images/options-viz.png`
- **Content**: Screenshot of the 3D visualization UI
- **Style**: Dark theme dashboard with charts

## How to Add Images:

### Option A: Create Screenshots (If Projects Have UI)
1. Run your projects locally
2. Take clean screenshots
3. Save as PNG in `public/images/`

### Option B: Create Architecture Diagrams (For Backend Projects)
1. Use Excalidraw (online)
2. Draw system architecture
3. Export as PNG
4. Save in `public/images/`

### Option C: Use Placeholders for Now
For now, the code will show icon placeholders until images are added.

## Current Setup:
- Ready for images at `/public/images/`
- Will automatically load `*.png` files
- Graceful fallback to icons if images missing