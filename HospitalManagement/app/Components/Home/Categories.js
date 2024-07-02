import { View, Text ,FlatList,Image} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";


export default function Categories() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCatogories();
  }, []);
  const getCatogories = () => {
    GlobalApi.getCatogories().then((resp) => {
        setCategoryList(resp.data.data)
      console.log(resp.data.data);
    });
  };
  if (!categoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Doctor Speciality</Text>
        <Text style={{ color: "#0000FF" }}>See All</Text>
      </View>
      <FlatList
      data={categoryList}
      renderItem={({item,index})=>(
        <View>
        <View>

        <Image source={{uri:item.attributes.Icon.data.attributes?.url}} style={{width:30,height:30}}/>
        </View>
        </View>
      )}
      />
    </View>
  );
}
