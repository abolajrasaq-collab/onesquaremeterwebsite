# Converting 2D Images to 3D Models for 1SQM

## Recommended AI Tools

To generate interactive 3D models from your existing property photos, we recommend using these AI-powered tools:

### 1. Spline AI (Best for Web Integration)
Spline is the tool we currently use in the project.
- **Workflow**: Upload your image → Use "Generate 3D" → Export as `.splinecode` or URL.
- **Pros**: Direct integration, optimized for web, easy editor.
- **Cons**: Still experimental for complex architecture.

### 2. Luma AI (Best for Photorealism)
Luma uses NeRF technology to create highly realistic 3D captures.
- **Workflow**: Upload a video or set of photos → Luma generates a `.glb` or `.usdz` file.
- **Pros**: Incredible detail and lighting.
- **Cons**: Files can be large; requires optimization.

### 3. CSM.ai (Cube)
Generates 3D assets from single images.
- **Workflow**: Upload single image → get 3D model.
- **Pros**: Fast, good for isolated objects (furniture, buildings).

## Integration Steps

Once you have your 3D model:

1.  **If using Spline**:
    - Build your scene in Spline Design.
    - Export -> Code -> Copy the URL (e.g., `https://prod.spline.design/.../scene.splinecode`).
    - Paste this URL into `Project3DViewer.tsx` or `projects.ts` data file.

2.  **If using .GLB files**:
    - Import the .glb into Spline.
    - Add lighting and camera controls.
    - Export as Spline Scene.

## Optimizing for Web
- Keep polygon count low (< 50k triangles).
- Use compressed textures (WebP or JPG).
- Limit scene size to < 5MB for fast loading.
