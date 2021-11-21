**Сборка Gulp 4**

- Есть dev и prod версии
- Написана на js ES6 но исполняется с babel/register (проблема с import-ами json)
- Все таски, пути, настроки в папке gulpfile.babel.js (в ней index.js - это gulpfile.js)
- Препроцессор pug, sass
___

**npm run gulp** - версия для разработки проекта

**npm run gulp --prod** - собрать в папку docs финальную версию проекта
