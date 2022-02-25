/* Setting interfaces */
namespace BoilerPlate {
    export interface IPluginBoilerPlateProjectSettings {
        projectSettingsTitle: string;
    }

    export interface IPluginBoilerPlateCustomerSettings {
        customerSettingsTitle: string;
    }
    export interface IPluginBoilerPlateFieldParameter extends IFieldParameter {
        fieldParameter: string;
    }
    export interface IPluginBoilerPlateControlOptions extends IBaseControlOptions {}
}
