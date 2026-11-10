import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const isLoading = false;
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center">
            <Image
              source={require("../../../assets/images/auth2.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => {}}
              disabled={isLoading}
              style={{}}
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={require("../../../assets/images/google.png")}
                  className="size-1 mr-1"
                  resizeMode="contain"
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
