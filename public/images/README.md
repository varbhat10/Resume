# Images Directory

Place your images in this directory to use them in your portfolio website.

## Required Images:
- **suitpic.jpg** - Your professional photo displayed on the home page
- Add any other images you want to use on the website here

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