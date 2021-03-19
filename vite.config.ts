// @ts-nocheck

import { md } from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
    base: './', //修改打包公共路径
    assetsDir: 'assets', //修改打包生成的asset目录名
    plugins: [md()],
    vueCustomBlockTransforms: {
        demo: (options) => {
            const { code, path } = options
            const file = fs.readFileSync(path).toString()
            const parsed = baseParse(file).children.find(n => n.tag === 'demo')
            const title = parsed.children[0].content
            const main = file.split(parsed.loc.source).join('').trim()
            return `export default function (Component) {
        Component.__sourceCode = ${
                JSON.stringify(main)
            }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
        }
    }
};