/**
 * @who      : Lightful <rhodes@lightful.com>
 * @when     : 2021 Mar
 * @what     : Button component which can house a client logo
 */
import { LightningElement, api } from 'lwc';

export default class ActionButton extends LightningElement {
    @api clickMethod;           //Callback for click.
    @api icon;                  //Icon on button.
    @api buttonStyle;           //Brand, Neutral
    @api hideIcon;              //Hide icon or not.
    @api text;                  //Button text
    @api alignment;             //Div Alignment.
    @api disabled;              //True false to disable button
    @api eventData;             //Will pass this data back up through the event.

    get clientLogoColour() {

        return this.buttonStyle == 'Brand' ? 'white' : '#1825AA';

    }

    get buttonStyling() { 

        return  this.buttonStyle == 'Brand' ? 'navigation-button navigation-button_brand'  :  'navigation-button navigation-button_neutral' 

    }

    get divAlignment() {

        return 'text-align: ' + this.alignment + ';'

    }

}