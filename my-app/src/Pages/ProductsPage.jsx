import { AspectRatio, Box, Checkbox, Container, Divider, Heading, Hide, Input, Link, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";


export default function ProductsPage() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        const FtchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    url: `http://localhost:3000/products`,
                })
                //console.log(res)
                setproducts(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        FtchData()
    }, [])


    // useEffect(() => {
    //     const FtchData = async () => {
    //         try {
  
    //           const response = await axios.post(
    //               'https://api-crt.cert.havail.sabre.com/v4.0.0/get/hotelcontent',
    //               // '{\n  "GetHotelContentRQ": {\n    "POS": {\n      "Source": {\n        "PseudoCityCode": "TM61"\n      }\n    },\n    "SearchCriteria": {\n      "HotelRefs": {\n        "HotelRef": {\n          "HotelCode": "100123982",\n          "CodeContext": "GLOBAL"\n        }\n      },\n      "DescriptiveInfoRef": {\n        "PropertyInfo": true,\n        "LocationInfo": true,\n        "Amenities": true,\n        "Descriptions": {\n          "Description": [\n            {\n              "Type": "ShortDescription"\n            }\n          ]\n        },\n        "SecurityFeatures": true\n      },\n      "MediaRef": {\n        "MaxItems": "10",\n        "MediaTypes": {\n          "Images": {\n            "Image": [\n              {\n                "Type": "MEDIUM"\n              }\n            ]\n          },\n          "PanoramicMedias": {\n            "PanoramicMedia": [\n              {\n                "Type": "HD360"\n              }\n            ]\n          },\n          "Videos": {\n            "Video": [\n              {\n                "Type": "VIDEO360"\n              }\n            ]\n          }\n        },\n        "Categories": {\n          "Category": [\n            {\n              "Code": 1\n            }\n          ]\n        },\n        "RoomTypeCodes": {\n          "RoomTypeCode": [\n            {\n              "Code": "A1K"\n            }\n          ]\n        },\n        "AdditionalInfo": {\n          "Info": [\n            {\n              "Type": "CAPTION",\n              "value": true\n            },\n            {\n              "Type": "ROOM_TYPE_CODE",\n              "value": false\n            }\n          ]\n        },\n        "Languages": {\n          "Language": [\n            {\n              "Code": "EN"\n            }\n          ]\n        }\n      }\n    }\n  }\n}',
    //               {
    //                   'GetHotelContentRQ': {
    //                       'POS': {
    //                           'Source': {
    //                               'PseudoCityCode': 'TM61'
    //                           }
    //                       },
    //                       'SearchCriteria': {
    //                           'HotelRefs': {
    //                               'HotelRef': {
    //                                   'HotelCode': '100123982',
    //                                   'CodeContext': 'GLOBAL'
    //                               }
    //                           },
    //                           'DescriptiveInfoRef': {
    //                               'PropertyInfo': true,
    //                               'LocationInfo': true,
    //                               'Amenities': true,
    //                               'Descriptions': {
    //                                   'Description': [
    //                                       {
    //                                           'Type': 'ShortDescription'
    //                                       }
    //                                   ]
    //                               },
    //                               'SecurityFeatures': true
    //                           },
    //                           'MediaRef': {
    //                               'MaxItems': '10',
    //                               'MediaTypes': {
    //                                   'Images': {
    //                                       'Image': [
    //                                           {
    //                                               'Type': 'MEDIUM'
    //                                           }
    //                                       ]
    //                                   },
    //                                   'PanoramicMedias': {
    //                                       'PanoramicMedia': [
    //                                           {
    //                                               'Type': 'HD360'
    //                                           }
    //                                       ]
    //                                   },
    //                                   'Videos': {
    //                                       'Video': [
    //                                           {
    //                                               'Type': 'VIDEO360'
    //                                           }
    //                                       ]
    //                                   }
    //                               },
    //                               'Categories': {
    //                                   'Category': [
    //                                       {
    //                                           'Code': 1
    //                                       }
    //                                   ]
    //                               },
    //                               'RoomTypeCodes': {
    //                                   'RoomTypeCode': [
    //                                       {
    //                                           'Code': 'A1K'
    //                                       }
    //                                   ]
    //                               },
    //                               'AdditionalInfo': {
    //                                   'Info': [
    //                                       {
    //                                           'Type': 'CAPTION',
    //                                           'value': true
    //                                       },
    //                                       {
    //                                           'Type': 'ROOM_TYPE_CODE',
    //                                           'value': false
    //                                       }
    //                                   ]
    //                               },
    //                               'Languages': {
    //                                   'Language': [
    //                                       {
    //                                           'Code': 'EN'
    //                                       }
    //                                   ]
    //                               }
    //                           }
    //                       }
    //                   }
    //               },
    //               {
    //                   headers: {
    //                       'accept': 'application/json',
    //                       'Content-Type': 'application/json',
    //                       'authorization': 'Bearer T1RLAQIPDqGY2APVWl7y3ETwYfDI1oPU3o4Si33dVZZAhYeo6hAeNkVnxCVhvCqiamgCElWPAADgb4JGGv7/Wk8UPPzAVaxhVX6gXA1xYaKvdqQxRZww5EmXwieUc/xCDGaO4m62T3URXLoIqZOD6YEyxFVRvtmH95FvqYoJdqFLVtdMhiXfTqOndZWNDZXLVBnFNuxUAc/FfYyhqbQwVJK9qfkXAoYFn/52zxCIbuQjl3QjoYeqze7/551iO6+AUcoKaKkEXSdidMb9lCCJwGtJtPYQbiBr/11mfzRbuM6kDArYUDrPRx21GeV9m4llaHpQoF434le22tLHZsQc97hH15/0C2+fni2WUOt4CSIUvKY56Sk9awY*'
    //                   }
    //               }
    //           );
  
    //           console.log(response)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     FtchData()
    // }, [])
  



    return <Box px={10}>
        <SearchPanel />

        <Stack direction='row' spacing={4}>
            <Hide below='md'>
                <VStack w={{ sm: '0%', md: '30%' }} border='0px solid grey' align='flex-start'>

                    <Heading size='md'>Price</Heading>
                    <Container direction='row'><PriceSlider /></Container>
                    <Divider orientation='horizontal' />
                    <Heading size='md'>Traveller Experience</Heading>

                    <Checkbox size='lg'>
                        LGBTQ welcoming:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                    <Checkbox size='lg'>
                        Wheel-Chair Frendly:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                    <Checkbox size='lg'>
                        Family Frendly:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                </VStack>
            </Hide>

            <VStack w={{ base: '100%', sm: '100%', md: '70%' }} border='0px solid'>
                {products.map((product) =><ProductCard product={product}  key={product.id} id={product.id} /> )}
            </VStack>
        </Stack>


    </Box>

}

/*
{
  "GetHotelContentRS": {
    "ApplicationResults": {
      "status": "Complete",
      "Success": [
        {
          "type": "string",
          "timeStamp": "2016-02-15T09:37:08.609-06:00",
          "SystemSpecificResults": [
            {
              "timeStamp": "2016-02-15T09:37:08.609-06:00",
              "reference": "string",
              "ShortText": {},
              "Element": {},
              "RecordID": {},
              "DocURL": {},
              "HostCommand": {
                "LNIATA": "string"
              },
              "Message": [
                {
                  "code": "ERR.0381",
                  "value": "Invalid check-in date"
                }
              ]
            }
          ]
        }
      ],
      "Error": [
        {
          "type": "string",
          "timeStamp": "2016-02-15T09:37:08.609-06:00",
          "SystemSpecificResults": [
            {
              "timeStamp": "2016-02-15T09:37:08.609-06:00",
              "reference": "string",
              "ShortText": {},
              "Element": {},
              "RecordID": {},
              "DocURL": {},
              "HostCommand": {
                "LNIATA": "string"
              },
              "Message": [
                {
                  "code": "ERR.0381",
                  "value": "Invalid check-in date"
                }
              ]
            }
          ]
        }
      ],
      "Warning": [
        {
          "type": "string",
          "timeStamp": "2016-02-15T09:37:08.609-06:00",
          "SystemSpecificResults": [
            {
              "timeStamp": "2016-02-15T09:37:08.609-06:00",
              "reference": "string",
              "ShortText": {},
              "Element": {},
              "RecordID": {},
              "DocURL": {},
              "HostCommand": {
                "LNIATA": "string"
              },
              "Message": [
                {
                  "code": "ERR.0381",
                  "value": "Invalid check-in date"
                }
              ]
            }
          ]
        }
      ]
    },
    "HotelContentInfos": {
      "HotelContentInfo": {
        "HotelInfo": {
          "HotelCode": "100072188",
          "CodeContext": "GLOBAL",
          "SabreHotelCode": "8315",
          "HotelName": "Hyatt Regency Tulsa",
          "ChainCode": "HY",
          "ChainName": "Hyatt Hotels And Resorts",
          "BrandCode": "10008",
          "BrandName": "Hyatt",
          "Status": "Active",
          "CurrencyCode": "USD",
          "SabreRating": "string",
          "TierLabels": {
            "TierLabel": [
              {
                "Type": "Agency",
                "Value": "Platinum",
                "ProgramId": "1082"
              }
            ]
          }
        },
        "HotelDescriptiveInfo": {
          "PropertyInfo": {
            "Floors": "3",
            "Rooms": "118",
            "PropertyTypeInfo": {
              "PropertyType": [
                {
                  "Code": 1,
                  "Description": "All Suite"
                }
              ]
            },
            "PropertyFeatures": {
              "PropertyFeature": [
                {
                  "Info": "ADAA",
                  "value": "ADA Accessible"
                }
              ]
            },
            "Policies": {
              "Policy": [
                {
                  "Text": {
                    "Type": "CheckIn",
                    "value": "1200"
                  }
                },
                {
                  "Text": {
                    "Type": "CheckIn",
                    "value": "1200"
                  }
                }
              ]
            },
            "PropertyQualityInfo": {
              "PropertyQuality": [
                {
                  "Code": 57,
                  "Description": "Luxury"
                }
              ]
            },
            "PropertyTaxes": {
              "PropertyTax": [
                {
                  "Info": "TAX1",
                  "value": "13.00 PCT"
                }
              ]
            },
            "RoomTraits": {
              "RoomTrait": [
                {
                  "Info": "CFEE",
                  "value": "In room Coffee/Tea"
                }
              ]
            },
            "RequestableAmenities": {
              "Amenity": [
                {
                  "Info": "EXPERSON",
                  "value": "Extra person"
                }
              ]
            }
          },
          "LocationInfo": {
            "Latitude": 36.1548,
            "Longitude": -95.990356,
            "Address": {
              "AddressLine1": "50 N MARTINGALE RD",
              "AddressLine2": "Pointer Square",
              "AddressLine3": "Orlando",
              "CityName": {
                "CityCode": "TUL",
                "value": "Tulsa"
              },
              "StateProv": {
                "StateCode": "OK",
                "value": "Oklahoma"
              },
              "PostalCode": "60173",
              "CountryName": {
                "Code": "US",
                "value": "United States"
              }
            },
            "Neighborhoods": {
              "Neighborhood": [
                {
                  "Id": "90000092",
                  "value": "Tulsa OK"
                }
              ]
            },
            "Contact": {
              "Phone": "999-222-1111",
              "Fax": "999-222-1110"
            }
          },
          "Amenities": {
            "Amenity": [
              {
                "Code": 15,
                "Description": "Car rental desk",
                "ComplimentaryInd": false,
                "value": "Ask at reception for car rental charges"
              }
            ]
          },
          "SecurityFeatures": {
            "SecurityFeature": [
              {
                "Code": 9,
                "Description": "Complies with Local/State/Federal fire laws",
                "value": "Fire safety law compliant"
              }
            ]
          },
          "AdditionalCharges": {
            "AdditionalCharge": [
              {
                "Code": 196,
                "Amount": 25,
                "Description": "Extra adult charge"
              }
            ]
          },
          "Descriptions": {
            "Description": [
              {
                "Text": {
                  "Type": "Dining",
                  "value": "Bluefire Grill Full service dining, Breakfast Buffet, Mediterranean menu with Midwest specialties."
                }
              }
            ]
          },
          "Airports": {
            "Airport": [
              {
                "AirportOrCityCode": "ORD",
                "DirectionId": "E",
                "DistanceFromHotel": 21,
                "UOM": "MI",
                "AirportOrCityDescription": "Chicago O'Hare",
                "TransportationCode": "O",
                "AirportOrCityStateCode": "OK",
                "AirportOrCityCountryCode": "US",
                "Primary": true
              }
            ]
          },
          "PointsOfInterest": {
            "PointOfInterest": [
              {
                "CountryCode": "US",
                "DirectionId": "S",
                "DistanceFromHotel": 1,
                "TransportationCode": "O",
                "StateCode": "O",
                "UOM": "MI",
                "Description": "Tulsa Conv Ctr Arena"
              }
            ]
          },
          "AcceptedCreditCards": {
            "CreditCard": [
              {
                "Code": "AX",
                "value": "AMERICAN EXPRESS"
              }
            ]
          },
          "GuaranteePolicies": {
            "GuaranteeAccepted": [
              {
                "Code": 19,
                "Description": "Travel agency IATA number"
              }
            ]
          }
        },
        "HotelMediaInfo": {
          "MediaItems": {
            "MediaItem": [
              {
                "Id": "1377631",
                "Ordinal": 2,
                "LastModifedDate": "2017-06-28",
                "Format": "JPG",
                "ImageItems": {
                  "Image": [
                    {
                      "Url": "http://vcmp-hotels.cert.sabre.com/image/upload/t_vcmp_thumb/hotel/i/1/jdbkyzhiy4tmmm0a30e3.jpg",
                      "Type": "THUMBNAIL",
                      "Height": 100,
                      "Width": 150
                    }
                  ]
                },
                "PanoramicMediasItems": {
                  "PanoramicMedia": [
                    {
                      "Url": "https://www.iceportal.com/brochures/Media/Show/photoThumb.aspx?did=8845&brochureid=6354&mtype=26162&publicid=22707462&instanceid=9&resizing=default",
                      "Type": "HD360",
                      "Height": 100,
                      "Width": 150
                    }
                  ]
                },
                "VideosItems": {
                  "Video": [
                    {
                      "Url": "http://s3.amazonaws.com/iceportaldata/brochures/20416/video021016165607956.mp4",
                      "Type": "VIDEO360",
                      "Height": 100,
                      "Width": 150
                    }
                  ]
                },
                "Category": {
                  "CategoryCode": 3,
                  "Description": {
                    "Text": [
                      {
                        "Language": "en",
                        "value": "Text-based descriptor of the media item."
                      }
                    ]
                  }
                },
                "RoomTypeCode": [
                  {
                    "Code": "AQK"
                  }
                ],
                "AdditionalInfo": {
                  "Info": [
                    {
                      "Type": "CAPTION",
                      "Description": {
                        "Text": [
                          {
                            "Language": "en",
                            "value": "Guestroom"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  }
}
400	
Bad Request
*/