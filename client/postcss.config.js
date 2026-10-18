import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'

// Явный импорт + массив: работает и с postcss-nested v9 (ESM),
// где короткая запись { 'postcss-nested': {} } ломается.
export default {
  plugins: [nested(), autoprefixer()],
}
