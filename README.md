# Feature-Sliced Design Library

[![npm version](https://img.shields.io/npm/v/create-structure-fsd.svg)](https://www.npmjs.com/create-structure-fsd)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Описание

Feature-Sliced Design (FSD) - это структурный подход к разработке фронтенд-приложений, сосредоточенный на организации кода в зависимости от бизнес-функций. Эта библиотека предоставляет инструменты для создания и управления структурой FSD в ваших проектах.

## Установка

```sh
npm install create-structure-fsd/react-native
```
## Использование

После установки вы можете использовать библиотеку для создания структуры FSD и компонентов в вашем проекте.

### Примеры команд

1. Создание структуры FSD

Для создания базовой структуры вашего проекта выполните следующую команду:
```sh
fsd createStructure
```
2. Создание компонента

Вы можете создать компонент с помощью следующей команды:
```sh
fsd createComponent Component TestComponent
```
Component - тип компонента, который Вы хотите создать (Asset/Component/Util/Hook/Screen ...)
TestComponent - имя компонента

## API

### createStructureFSD()

Эта функция создает базовую структуру проекта в соответствии с принципами FSD.

### createComponent(name)

Эта функция создает новый компонент с указанным именем в соответствующей папке структуры FSD.

#### Параметры
- type: string - тип компонента, который Вы хотите создать (Asset/Component/Util/Hook/Screen ...)
- name: string - Имя компонента, которое должно быть создано.

## Примеры

### Создание структуры проекта
const createStructureFSD = require('your-library-name/createStructureFSD');

createStructureFSD();
### Создание компонента
const createComponent = require('your-library-name/createComponent');

createComponent('Component', 'MyNewComponent');
## Лицензия

Этот проект лицензирован под лицензией MIT. См. файл [LICENSE](LICENSE) для подробной информации.

## Сотрудничество

Если вы хотите внести свой вклад, пожалуйста, сначала создайте форк репозитория. Затем вы можете создать pull request с вашими изменениями.

## Связь

Если у вас есть вопросы или рекомендации, не стесняйтесь обратиться через [GitHub Issues](https://github.com/kostiukirill/create-structure-fsd/issues) или [отправить мне сообщение](https://github.com/username).
