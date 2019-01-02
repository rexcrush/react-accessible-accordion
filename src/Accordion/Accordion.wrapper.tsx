import * as React from 'react';

import {
    AccordionContainer,
    Consumer,
    Provider,
} from '../AccordionContainer/AccordionContainer';
import Accordion from './Accordion';

type AccordionWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
    accordion?: boolean;
    onChange(args: any): any; // todo, stricter.
};

class AccordionWrapper extends React.Component<AccordionWrapperProps> {
    static defaultProps = {
        accordion: true,
        onChange: () => {
            //
        },
        className: 'accordion',
        children: null,
    };

    renderAccordion = (accordionStore: AccordionContainer) => {
        const { accordion, onChange, ...rest } = this.props;
        return <Accordion accordion={accordionStore.accordion} {...rest} />;
    };

    render() {
        return (
            <Provider
                accordion={this.props.accordion}
                onChange={this.props.onChange}
            >
                <Consumer>{this.renderAccordion}</Consumer>
            </Provider>
        );
    }
}

export default AccordionWrapper;
