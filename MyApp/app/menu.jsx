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

    const separatorComp = <view style = {styles.separator} />

    // const headerComp = <Text>Top of List</Text>

    const footerComp = <Text style={{color: theme.text}}>End of Menu</Text>


    return (
        <Container>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={separatorComp}
                // ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.MenuTextrow}>
                            <Text style={[styles.menuItemTitle,styles.menuItemText]}>
                                {item.title}</Text>
                            <Text style={styles.menuItemText}>
                                {item.description}</Text>
                        </View>
                        <Image 
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                            />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.backgroundColor,


        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawihip' : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row', 
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden', 
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            height: '100%',
            width: '100%',
        }

    })
}