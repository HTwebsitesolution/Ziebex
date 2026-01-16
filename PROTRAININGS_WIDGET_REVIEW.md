# ProTrainings Widget Code Review

## Widget Code Provided

```html
<!-- Place this tag where you want the widget to render. -->
<div class="pt-online-courses" data-facilitator-id="19195" data-course-collection="48"></div>
<div class="pt-courses" data-width="465" data-facilitator-id="19195" data-days="90" data-title="Our Upcoming Courses"></div>
<div class="pt-reviews" data-width="465" data-facilitator-id="19195"></div>
<div class="pt-video" data-width="465" data-facilitator-id="19195" data-course-id="303"></div>

<!-- Place this tag after the last widget tag. -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://procourses.co.uk/javascripts/widgets.js?v=20230502';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
```

## Potential Issues Identified

### ✅ Syntax Check
- **HTML structure**: ✓ Correct
- **Script placement**: ✓ Correct (placed after widget tags)
- **Script loading**: ✓ Correct (async, placed in head)

### ⚠️ Potential Problems

1. **Attribute Name Change**
   - Previous code used: `data-affiliate-id="63243"`
   - New code uses: `data-facilitator-id="19195"`
   - **Status**: Needs verification - this might be the correct attribute name for facilitator-based widgets

2. **ID Verification Required**
   - `facilitator-id="19195"` - Need to verify this ID is valid and active
   - `course-collection="48"` - Need to verify this collection exists
   - `course-id="303"` - Need to verify this course exists

3. **404 Error Possible Causes**
   - Invalid facilitator ID (facilitator might not be publicly visible)
   - Invalid course collection ID
   - Invalid course ID for video widget
   - Widget script might need updated version

## Recommendations

### 1. Verify Facilitator ID
- Check your ProTrainings instructor dashboard
- Confirm facilitator ID `19195` is correct and active
- Ensure your facilitator profile is set to "publicly viewable"

### 2. Verify Collection and Course IDs
- Check if course collection `48` exists in your account
- Verify course ID `303` is correct for the video widget
- Test these IDs individually

### 3. Test Widget Script Version
- Current version: `?v=20230502` (May 2023)
- This might be outdated - check for a newer version
- Try removing the version parameter to get the latest

### 4. Alternative Testing
Try testing each widget individually to isolate the issue:

```html
<!-- Test 1: Online Courses Widget -->
<div class="pt-online-courses" data-facilitator-id="19195" data-course-collection="48"></div>

<!-- Test 2: Courses Widget -->
<div class="pt-courses" data-width="465" data-facilitator-id="19195" data-days="90" data-title="Our Upcoming Courses"></div>

<!-- Test 3: Reviews Widget -->
<div class="pt-reviews" data-width="465" data-facilitator-id="19195"></div>

<!-- Test 4: Video Widget -->
<div class="pt-video" data-width="465" data-facilitator-id="19195" data-course-id="303"></div>
```

### 5. Check Browser Console
- Open browser developer tools (F12)
- Go to Console tab
- Look for JavaScript errors
- Go to Network tab
- Look for 404 errors and check which URLs are failing

### 6. Contact ProTrainings Support
- Verify `data-facilitator-id` is the correct attribute name
- Confirm facilitator ID `19195` is active
- Verify course collection `48` exists
- Verify course ID `303` is valid
- Check if there's a newer widget script version

## Current Implementation

Your site currently uses **custom course cards** with direct affiliate links, not the widget code. This approach:
- ✅ Works with affiliate ID `63243`
- ✅ Uses discount code `UK-LJWUOV`
- ✅ Direct control over course display
- ✅ No dependency on external widget loading

## Comparison

| Aspect | Widget Code | Current Custom Cards |
|--------|-------------|---------------------|
| **Tracking** | `data-facilitator-id="19195"` | `affiliate-id="63243"` |
| **Display** | Embedded widgets | Custom-designed cards |
| **Control** | Limited (ProTrainings controls) | Full control |
| **Performance** | Depends on external script | All local |
| **Issues** | 404 errors reported | Working correctly |

## Next Steps

1. **If you want to use widgets**: Fix the facilitator ID and verify all IDs with ProTrainings
2. **If widgets continue to fail**: Keep using the current custom card implementation which is working
3. **Hybrid approach**: Use widgets for some features (reviews, upcoming courses) and custom cards for course listings
