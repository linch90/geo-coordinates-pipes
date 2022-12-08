# GeoCoordinatesPipes

Angular pipes to display coordinates(latitude and longitude), magnetic variation nicely.

## Setup

The pipes are in the _@linch90/geo-coordinates-pipes_ package, here is how you import them in your Angular module:

```typescript
import { GeoCoordinatesPipesModule } from "@linch90/geo-coordinates-pipes";

@NgModule({
  imports: [
    // other imports
    GeoCoordinatesPipesModule,
  ],
  // rest of the module metadata
})
export class YourModule {}
```

## Usage

```html
<p>{{ 45.135 | latitute }}</p>
<!-- 45° 08' 06" N -->
<p>{{ -19.37555556 | latitute }}</p>
<!-- 19° 22' 32" S -->
```

```html
<p>{{ 121.135 | longitude }}</p>
<!-- 121° 08' 06" E -->
<p>{{ -19.37555556 | longitude }}</p>
<!-- 019° 22' 32" W -->
```

```html
<p>{{ 5.135 | magneticVariation }}</p>
<!-- 05° 08' 06" E -->
<p>{{ -1.37555556 | magneticVariation }}</p>
<!-- 01° 22' 32" W -->
```
