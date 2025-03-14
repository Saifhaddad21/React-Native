import {
    StyleSheet, Appearance, Platform, SafeAreaView,
    ScrollView, FlatList, View, Text, Image
} from "react-native";

import { colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/menuImages';

const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? colors.dark : colors.light;

    const styles = createStyles(theme, colorScheme);


    return (
        <Container>
            <FlatList
                 contentContainerStyle={{ paddingBottom: 20 }} // Ensures spacing at bottom
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image 
                            source={MENU_IMAGES[item.id - 1]}
                            />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({

    })
}