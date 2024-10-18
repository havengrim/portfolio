declare module 'react-tooltip' {
    import { ComponentType } from 'react';

    export interface ReactTooltipProps {
        place?: string;
        type?: string;
        effect?: string;
        // Add more props here if needed
    }

    const ReactTooltip: ComponentType<ReactTooltipProps>;
    export default ReactTooltip;
}
