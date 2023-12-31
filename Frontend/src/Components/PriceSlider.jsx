import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function PriceSlider({setprice,price}) {
  let initial=price/48
  const [sliderValue, setSliderValue] = useState(initial?initial:50);
    
  return (
    <>
      <Box pt={6} pb={2}>
        <Slider
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
          onChangeEnd={() => setprice(sliderValue * 48)}
          defaultValue={sliderValue}
        >
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {sliderValue * 48}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
}
