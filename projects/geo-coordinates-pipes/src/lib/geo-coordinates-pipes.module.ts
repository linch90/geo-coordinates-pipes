import { NgModule } from '@angular/core';
import { LatitudePipe } from './latitude.pipe';
import { LongitudePipe } from './longitude.pipe';
import { MagneticVariationPipe } from './magnetic-variation.pipe';

@NgModule({
  declarations: [LatitudePipe, LongitudePipe, MagneticVariationPipe],
  imports: [],
  exports: [LatitudePipe, LongitudePipe, MagneticVariationPipe],
})
export class GeoCoordinatesPipesModule {}
