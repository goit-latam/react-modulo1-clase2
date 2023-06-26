import { RecipeList } from './Recipe/RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Recipe/Layout/Layout';

import PaintingList from './paintings/PaintingList';
import ColorPicker from './paintings/ColorPicker/ColorPicker';
import Alert from './paintings/Alert/Alert';
import Container from './paintings/Container/Container';
import Box from './paintings/Box/Box';
import paintings from './paintings/paintings.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <Layout>
      <div>Recipe Form</div>
      <RecipeList items={recipes} />

      <Container>
        <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
        <Box type="medium" />
        <Box type="large" />
        <Alert
          text="¡Boom! Has desbloqueado el logro de genialidad!"
          type="success"
        />
        .
        <Alert
          text="¡Cuidado! El café que dejaste en tu escritorio ha evolucionado a nueva forma de vida. !"
          type="warning"
        />
        <Alert
          text="Error 404: Sentido del humor no encontrado. Intenta reiniciando tu día.!"
          type="error"
        />
        <ColorPicker options={colorPickerOptions} />
        <PaintingList items={paintings} />
      </Container>

      <GlobalStyle />
    </Layout>
  );
};
