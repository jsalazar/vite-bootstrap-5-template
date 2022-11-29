import { resolve } from 'path'
import { defineConfig } from 'vite'
const path = require('path')

// export default {
//   root: path.resolve(__dirname, 'src'),
//   resolve: {
//     alias: {
//       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//     }
//   },
//   server: {
//     port: 8080,
//     hot: true
//   }
// }

export default defineConfig({
    root: path.resolve(__dirname, 'src/'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
            './fonts': path.resolve(__dirname, 'node_modules/bootstrap-icons/font/fonts'),
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                demo: resolve(__dirname, '/demo/index.html')
            }
        }
    }
})