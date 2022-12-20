import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react"
import { useState } from "react"

export default function PriceSlider() {
    const [sliderValue, setSliderValue] = useState(50)

    return (
        <>
            <Box pt={6} pb={2}>
                <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} onChangeEnd={() => console.log(sliderValue*24)}>
                    <SliderMark
                        value={sliderValue}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
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
    )
}