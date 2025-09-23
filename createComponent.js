const fs = require("fs");
const path = require("path");

/**
 * Script for creating a new component with the required folder and file structure.
 * This script contains the logic of creating files and folders, you can modify it:
 * add the paths you need to the parseTargetFolderPath function,
 * or add new files and folders to the createComponent function
 */

/**
 * Calling the script in the console
 * node createComponent <targetFolderName> <componentName>
 */

/**
 * The function of converting the folder name into the path
 * to this folder (you can modify, add your own paths to the switch - case)
 * @param {string} targetFolderName - The name of the destination folder or the full path to the destination folder in the format ./src/<folder to path>
 * @returns {string}
 */

const parseTargetFolderPath = (componentType) => {
  return `./app/${componentType}s`;
};

/**
 * The function of creating a folder with a component and with the necessary folder and file structure according to FSD
 * @param {string} targetFolderName - The name of the destination folder or the full path to the destination folder in the format ./src/<folder to path>
 * @param {string} ComponentName - The name of the component you want to create
 */

const createComponent = (componentType, componentName) => {
  /**  Converting folder name to path */
  const targetFolderPath = parseTargetFolderPath(componentType);
  if (targetFolderPath) {
    /** Creating a folder of the component's root folder*/
    const rootPath = path.join(targetFolderPath, componentName);
    fs.mkdirSync(rootPath, { recursive: true });
    /** Creating a folder of the lib folder (specify the path to the folder in which you want to create the folder with the first argument, and the folder name with the second string)*/
    const libFolderPath = path.join(rootPath, "lib");
    fs.mkdirSync(libFolderPath);
    /** Creating an api folder folder (specify the path to the folder in which you want to create the folder with the first argument, and the folder name with the second string)*/
    const apiFolderPath = path.join(rootPath, "api");
    fs.mkdirSync(apiFolderPath);
    /** Creating a folder of the types folder (specify the path to the folder in which you want to create the folder with the first argument, and the folder name with the second string)*/
    const typesFolderPath = path.join(rootPath, "types");
    fs.mkdirSync(typesFolderPath);

    /** Filling in the component file (it is important to observe spaces here, if you pay attention, in the line everything starts with the zero sign of each line (starting from the second line, the first line is counted from the sign `)) )*/
    const componentContent = `import React, { JSX } from 'react'
import { View, Text } from 'react-native'
import { I${componentName}Props, I${componentName}HookDataProps, I${componentName}HookStylesProps } from './types/${componentName}.types.ts'
import { useStates, useEffects, useStyles, useHandlers, useData, useText} from './lib'

/**
* ${componentName} - description
* @param { I${componentName}Props } props - Properties passed to the component.
* @returns { JSX.Element }
*/
export const ${componentName}: React.FC<I${componentName}Props> = (props: I${componentName}Props): JSX.Element => {
	const states = useStates(props)
	const text = useText(props)
	const stylesProps: I${componentName}HookStylesProps = {
		props,
		states,
	}
	const styles = useStyles(stylesProps)
	const dataProps: I${componentName}HookDataProps = {
		props,
		states,
		styles,
		text,
	}
	const data = useData(dataProps)
	const hookProps = {
		props,
		states,
		text,
		data,
		styles
		}
	const handlers = useHandlers(hookProps)
	useEffects(hookProps)

    return (
        <View>
			<Text>
            ${componentName}
			</Text>
        </View>
    )
}`;
    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookStates = `import {useState} from 'react'
import { I${componentName}Props, I${componentName}States } from '../types/${componentName}.types.ts'

/**
 * Custom hook for return states & setters of component.
 * @param { I${componentName}Props } props - Properties passed to the component.
 * @returns { I${componentName}States }
*/
export const useStates = (props: I${componentName}Props): I${componentName}States  => {
    const [testState, setTestState] = useState<string>('')
    return {testState, setTestState}
}`;

    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookText = `import { I${componentName}Props, I${componentName}Text } from '../types/${componentName}.types.ts'
/**
 * Custom hook for return text of component.
 * @param { I${componentName}Props } props - Properties passed to the component.
 * @returns { I${componentName}Text }
*/
export const useText = (props: I${componentName}Props): I${componentName}Text  => {
    const text = '${componentName}'
    return {text}
}`;

    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookData = `import { I${componentName}HookDataProps,  I${componentName}Data} from '../types/${componentName}.types.ts'

/**
 * Custom hook for return data of ${componentName}.
 * @param { I${componentName}HookDataProps } hookProps - Properties used in hook.
 * @returns { I${componentName}Data }
*/
export const useData = (hookProps: I${componentName}HookDataProps): I${componentName}Data => {
	const testReturn = '${componentName}'
	return {testReturn}
}`;

    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookEffects = `import {useEffect} from 'react'
import { I${componentName}HookProps } from '../types/${componentName}.types.ts'

/**
 * Custom hook for effects of ${componentName}.
 * @param { I${componentName}HookProps } hookProps - Properties used in hook.
 * @returns { void }
*/
export const useEffects = (hookProps: I${componentName}HookProps): void => {
	useEffect(() => {
		console.log('Test')
	}, [])
}`;

    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookStyles = `import { I${componentName}HookStylesProps, I${componentName}Styles } from '../types/${componentName}.types.ts'

export const useStyles = (hookProps: I${componentName}HookStylesProps): I${componentName}Styles => {
	const styles: I${componentName}Styles = {
		container: {
			flex: 1
		},
	};

	return styles
}`;
    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookHandlers = `import { I${componentName}HookProps, I${componentName}Handlers } from '../types/${componentName}.types.ts'

/**
 * Custom hook for return handlers of ${componentName}.
 * @param { I${componentName}HookProps } hookProps - Properties used in hook.
 * @returns { I${componentName}Handlers }
*/
export const useHandlers = (hookProps: I${componentName}HookProps): I${componentName}Handlers => {
	const testHandler = (): void => {}
	return {testHandler}
}`;

    /** Filling in the component hook file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const types = `import React, {Component} from 'react'
import { ViewStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types;

type ${componentName}NavigationProp = NativeStackNavigationProp<RootStackParamList, '${componentName}'>;
type ${componentName}RouteProp = RouteProp<RootStackParamList, '${componentName}'>;

/**
 * Properties passed to the component ${componentName}.
*/
export interface I${componentName}Props {
    navigation: ${componentName}NavigationProp;
    route: ${componentName}RouteProp;
};


/**
 * Text data used in component ${componentName}.
*/
export interface I${componentName}Text {
	[key: string]: string;
}

/**
 * Data returned from hook to ${componentName}
*/
export interface I${componentName}Data {
	[key: string]: string;
}

/**
 * States data used in component ${componentName}
*/
export interface I${componentName}States {
	testState: string;
	setTestState: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Styles used in component ${componentName}
*/
export interface I${componentName}Styles {
	container: ViewStyle;
}

/**
 * Props used in component ${componentName} hooks
*/
export interface I${componentName}HookProps {
	props: I${componentName}Props;
	states: I${componentName}States;
	text: I${componentName}Text;
	data: I${componentName}Data;
	styles: I${componentName}Styles;
}

/**
 * Props used in component ${componentName} hooks for return styles
*/
export interface I${componentName}HookStylesProps extends Pick<I${componentName}HookProps, 'props' | 'states'> {}

/**
 * Handlers used in component ${componentName} 
*/
export interface I${componentName}Handlers {
	[key: string]: Function
}

/**
 * Props used in component ${componentName} hooks for return 
*/
export interface I${componentName}HookDataProps extends Pick<I${componentName}HookProps, 'props' | 'states' | 'styles' | 'text'> {}
`;
    /** Filling in the api file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const hookService = `import { I${componentName}HookProps } from '../types/${componentName}.types.ts'
	
/**
 * Custom hook for return services of ${componentName}.
 * @param { I${componentName}HookProps } hookProps - Properties used in hook.
*/
export const useService = (props: I${componentName}HookProps) => {
    const testReturn = 'test'
    return {testReturn}
}`;
    /** Filling in the api file (it is important to observe spaces here, if you pay attention, everything in the line starts with the zero sign of each line (starting from the second line, the first line is counted from the ` sign)*/
    const reExportComponent = `export * from './${componentName}'
`;
    const serviceReExport = `export * from './useService'
`;
    const typesReExport = `export * from './${componentName}.types'
`;
    const libReExportHooks = `export * from './useData'
export * from './useText'
export * from './useStates'
export * from './useStyles'
export * from './useEffects'
export * from './useHandlers'
	  `;
    /** File creation (the first argument of the fs.writeFileSync method is the path.join method, in which the path to the folder is taken as the first argument, the file name is taken as the second argument, and the file filling string is taken as the second argument of the fs.writeFileSync method)*/
    fs.writeFileSync(
      path.join(rootPath, `${componentName}.tsx`),
      componentContent
    );
    fs.writeFileSync(path.join(libFolderPath, `useData.tsx`), hookData);
    fs.writeFileSync(path.join(libFolderPath, `useText.tsx`), hookText);
    fs.writeFileSync(path.join(libFolderPath, `useStates.tsx`), hookStates);
    fs.writeFileSync(path.join(libFolderPath, `useStyles.tsx`), hookStyles);
    fs.writeFileSync(path.join(libFolderPath, `useEffects.tsx`), hookEffects);
    fs.writeFileSync(path.join(libFolderPath, `useHandlers.tsx`), hookHandlers);
    fs.writeFileSync(path.join(libFolderPath, `index.ts`), libReExportHooks);
    fs.writeFileSync(path.join(apiFolderPath, `useService.tsx`), hookService);
    fs.writeFileSync(path.join(apiFolderPath, `index.ts`), serviceReExport);
    fs.writeFileSync(path.join(rootPath, `index.ts`), reExportComponent);
    fs.writeFileSync(
      path.join(typesFolderPath, `${componentName}.types.ts`),
      types
    );
    fs.writeFileSync(path.join(typesFolderPath, `index.ts`), typesReExport);
    fs.appendFileSync(
      `${targetFolderPath}/index.ts`,
      `\nexport * from './${componentName}'`
    );
  }
  console.log(
    `
	The new ${componentType} "${componentName}" has been successfully created!
	Kirill Kostyu thanks you for using the script!
	`
  );
};

// /** Receiving arguments from the console */
// const args = process.argv.slice(2);
// /** Type of component */
// const componentType = args[0];
// /** ComponentName */
// const componentName = args[1];

// if (!componentType || !componentName) {
//   console.error("Not enough arguments");
//   process.exit(1);
// }
// createComponent(componentType, componentName);

module.exports = { createComponent };
