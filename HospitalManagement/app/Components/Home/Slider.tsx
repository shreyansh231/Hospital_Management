import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GlobalApi from '../../Services/GlobalApi';

export default function Slider() {
  const [sliderList, setSliderList] = useState([
    {
      id: 1,
      attributes: {
        Name: "Slider 1",
        Imageurl: {
          data: {
            attributes: {
              url: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
            }
          }
        }
      }
    },
    {
      id: 2,
      attributes: {
        Name: "Slider 2",
        Imageurl: {
          data: {
            attributes: {
              url: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
            }
          }
        }
      }
    }
  ]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider()
      .then(resp => {
        console.log('Data fetched from backend:', resp.data.data);
        setSliderList(resp.data.data);
      })
      .catch(error => {
        if (error.response) {
          console.log('Response error:', error.response.data);
          console.log('Response status:', error.response.status);
          console.log('Response headers:', error.response.headers);
        } else if (error.request) {
          console.log('Request error:', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('Config:', error.config);
      });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Imageurl.data.attributes.url }}
            style={{ width: Dimensions.get("screen").width * 0.9, height: 170, borderRadius: 10, margin: 2 }}
          />
        )}
      />
    </View>
  );
}
