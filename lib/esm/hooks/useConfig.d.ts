import { CommandObject, ShortcutObject } from '../index.types';
export declare const useConfig: () => {
    config: ({ keyboards, commands }: {
        keyboards: ShortcutObject[];
        commands: CommandObject[];
    }) => void;
    configUnmount: ({ keyboards, commands }: {
        keyboards: ShortcutObject[];
        commands: CommandObject[];
    }) => void;
};
