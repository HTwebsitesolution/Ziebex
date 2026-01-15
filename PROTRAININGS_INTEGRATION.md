# ProTrainings Integration Guide

This guide explains how to integrate ProTrainings courses into your Ziebex website using your affiliate links.

## Overview

The Courses section on your website displays training courses from ProTrainings. As an affiliate and accredited trainer, you can add courses with your affiliate tracking links to earn commissions on sales.

## How to Add Courses

### Step 1: Get Your Affiliate Links

1. Log in to your ProTrainings affiliate dashboard
2. Navigate to the course you want to promote
3. Copy the affiliate link (it should include your affiliate ID/tracking parameter)
4. Example format: `https://protrainings.uk/courses/[course-name]?ref=[your-affiliate-id]`

### Step 2: Add Courses to Your Website

1. Open `src/data/courses.js`
2. Add or edit course objects in the `courses` array
3. Each course should have:
   - `id`: Unique number
   - `title`: Course name
   - `category`: One of the category IDs (see categories array)
   - `description`: Brief course description
   - `duration`: Course length (e.g., "1 Day", "3 Days")
   - `level`: Qualification level (e.g., "Level 2", "Level 3")
   - `price`: Price range (e.g., "From £75")
   - `image`: URL to course image (you can use Unsplash or upload your own)
   - `affiliateLink`: **Your ProTrainings affiliate link** (IMPORTANT!)
   - `featured`: `true` or `false` (featured courses show a badge)

### Example Course Entry

```javascript
{
  id: 7,
  title: 'Emergency First Aid at Work',
  category: 'first-aid',
  description: 'One-day emergency first aid course for low-risk workplaces.',
  duration: '1 Day',
  level: 'Level 3',
  price: 'From £95',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
  affiliateLink: 'https://protrainings.uk/courses/emergency-first-aid-at-work?ref=YOUR_AFFILIATE_ID',
  featured: false,
}
```

## Adding Categories

To add new course categories:

1. Open `src/data/courses.js`
2. Add a new category object to the `categories` array:

```javascript
{ id: 'new-category', name: 'New Category Name' }
```

3. Use the same `id` in your course objects' `category` field

## Customizing Course Images

You have several options for course images:

1. **Use Unsplash** (free stock photos):
   - Visit https://unsplash.com
   - Search for relevant images
   - Copy the image URL and add `?w=400&h=300&fit=crop` for sizing

2. **Upload Your Own Images**:
   - Add images to `public/courses/` folder
   - Reference them as `/courses/image-name.jpg`

3. **Use ProTrainings Course Images**:
   - If ProTrainings provides course images, you can use those URLs directly

## Testing Affiliate Links

1. Make sure all `affiliateLink` fields point to your actual ProTrainings affiliate URLs
2. Test each link to ensure it tracks correctly
3. Check that the links open in a new tab (already configured)

## View All Courses Link

The "View All Courses on ProTrainings" button at the bottom links to:
- `https://protrainings.uk/courses`

You can customize this to your affiliate link if ProTrainings provides a general affiliate URL for the courses page.

## Best Practices

1. **Keep Course Information Updated**: Regularly update prices, descriptions, and availability
2. **Use Featured Courses Wisely**: Feature your most popular or highest-commission courses
3. **Optimize Images**: Use high-quality, relevant images that load quickly
4. **Test Regularly**: Verify affiliate links are working and tracking correctly
5. **Monitor Performance**: Track which courses get the most clicks and conversions

## Need Help?

If you need assistance:
- Check ProTrainings affiliate documentation
- Review the course data structure in `src/data/courses.js`
- Contact ProTrainings support for affiliate link questions
