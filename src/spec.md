# Specification

## Summary
**Goal:** Serve the existing interactive heart-burst experience as the root page content at https://panda-m9z.caffiene.xyz/.

**Planned changes:**
- Configure deployment/routing so the heart-burst app loads at the root URL (/) on panda-m9z.caffiene.xyz.
- Ensure static asset paths/base URL are correct for the deployed domain so assets load without 404s.
- Verify the existing interactions (tap/click/keyboard) and post-burst message display work end-to-end after deployment.

**User-visible outcome:** Visiting https://panda-m9z.caffiene.xyz/ loads the heart-burst page with all assets, and the interaction behaves the same as in the current build.
