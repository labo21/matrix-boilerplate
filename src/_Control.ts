/// <reference path="./api/ControlCore.ts" />

/**
 * This implements a field which can be added to a category to be displayed when editing an item.
 * 
 * These fields can be printed in using the custom print sections.
 * 
 */


// eslint-disable-next-line no-unused-vars
namespace BoilerPlate {

   export class Control extends ControlCore {


        /** default configuration of control */
        protected controlConfig : IPluginBoilerPlateFieldParameter = {
            options: {}
        };
    
        /** interactive radio control */
        protected renderEditor(  fieldId:string, value:IPluginBoilerPlateFieldValue, options:IPluginBoilerPlateFieldOptions ) {

            let editor = "<div>";
            editor += "TODO code to render value with UI controls to edit";
            editor += "</div>";
            
            return editor;
        }
        
        /**  readonly printing for custom section, tooltip, zen or user without right to edit */
        protected renderPrint( fieldId:string, value:IPluginBoilerPlateFieldValue, options:IPluginBoilerPlateFieldOptions, params:IPluginBoilerPlatePrintParams) {
            
            let rendered = `<span class='${(params && params.class)?params.class:""} ${fieldId?fieldId:""}'>`;
            
            rendered += "TODO code to render value readonly";

            rendered += "</span>";
            return rendered;   
        }
        
        /** method to call to initialize the editor, e.g. to attach handlers to checkboxes etc */
        initEditor(  ) {
            let that = this;

            // react on changes to the value. the ui will pass a call function which will enable/disable the save 

            // example implementation
            $('input', this.editor).on( "change", () => {
                that.settings.valueChanged.apply(null);
            });
        }
                
        /** this method compares the to value of the control to another previous value */
        protected isSame( a:IPluginBoilerPlateFieldValue, b:IPluginBoilerPlateFieldValue) {

            // TODO compare the values as stored in the DB with the one from UI
            return true;
        }

        /** this method is called by the UI to retrieve the string to be saved in the database */
        getValue():string {
            if (this.editor) {
                // convert the displayed value to a JSON string
                
                let current :IPluginBoilerPlateFieldValue = {};

                // TODO read the value from the UI
                
                // return the value (as string to be saved to db)
                return JSON.stringify(current);
            } else {
                // nothing changed so we return exactly the same thing saved in the database
                return this.settings.fieldValue;
            }
        }
    
    
    }

}