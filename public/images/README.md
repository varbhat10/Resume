# Images Directory

Place your images in this directory to use them in your portfolio website.

## Required Images:
- **suitpic.jpg** - Your professional photo displayed on the home page
- Add any other images you want to use on the website here

## How to Add Your Profile Photo:

1. **Take or select a professional photo** of yourself
2. **Name it exactly `suitpic.jpg`** (case-sensitive)
3. **Place it directly in this directory** (Resume/public/images/)
4. **Rebuild and deploy your site** by pushing the changes to GitHub

## Troubleshooting:

If your image isn't showing up on GitHub Pages:

1. Make sure the image filename is exactly `suitpic.jpg` (lowercase, with extension)
2. Verify the image is in the correct directory (`public/images/`)
3. Check that you've committed and pushed the image file to your GitHub repository
4. After pushing, wait for the GitHub Actions workflow to complete (usually 2-3 minutes)
5. Try opening the image directly in your browser at: `https://[yourusername].github.io/Resume/images/suitpic.jpg`

## Example:

For local development, your image will be available at:
```
http://localhost:3000/Resume/images/suitpic.jpg
```

For GitHub Pages deployment, your image will be available at:
```
https://yourusername.github.io/Resume/images/suitpic.jpg
```

## How to Use:
Images in this directory can be accessed in your components using:
```jsx
<Image 
  src="/images/suitpic.jpg" 
  alt="Description" 
  width={500} 
  height={500} 
/>
```

Or as a background:
```jsx
<div 
  style={{ backgroundImage: "url('/images/suitpic.jpg')" }}
  className="..."
>
</div>
``` 