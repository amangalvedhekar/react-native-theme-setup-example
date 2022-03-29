import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/themes/lightTheme';
import {darkTheme} from './src/themes/darkTheme';
import {Text} from './src/components/atoms/Typography/Text';
import {Button} from './src/components/atoms/Button/Button';
import {TextInput} from './src/components/atoms/TextInput/TextInput';
import {InputWithLabel} from './src/components/moluecules/FormElement/FormElement';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{marginHorizontal: 16}}>
      <ScrollView>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
          <StatusBar />
          <TextInput placeholder="useless placeholder" size="small" />
          <TextInput placeholder="useless placeholder" />
          <InputWithLabel />
          <Text textType="heading" textColor="disabled">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="medium" textColor="disabled">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="regular" textColor="disabled">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="thin" textColor="disabled">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="light" textColor="disabled">
            The quick brown fox jumps over the lazy dog
          </Text>

          <Text textType="heading" textColor="secondary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="medium" textColor="secondary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="regular" textColor="secondary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="thin" textColor="secondary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="light" textColor="secondary">
            The quick brown fox jumps over the lazy dog
          </Text>

          <Text textType="heading" textColor="primary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="medium" textColor="primary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="regular" textColor="primary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="thin" textColor="primary">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="light" textColor="primary">
            The quick brown fox jumps over the lazy dog
          </Text>

          <Text textType="heading" textColor="error">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="medium" textColor="error">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="regular" textColor="error">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="thin" textColor="error">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="light" textColor="error">
            The quick brown fox jumps over the lazy dog
          </Text>

          <Text textType="heading" textColor="success">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="medium" textColor="success">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="regular" textColor="success">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="thin" textColor="success">
            The quick brown fox jumps over the lazy dog
          </Text>
          <Text textType="light" textColor="success">
            The quick brown fox jumps over the lazy dog
          </Text>
          <View style={{flex: 1, flexDirection: 'row', marginVertical: 16}}>
            <Button text="Add" size="small" />
            <Button text="Delete" size="small" />
          </View>
          <Button text="Add Category" />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
