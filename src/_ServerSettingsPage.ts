// eslint-disable-next-line no-unused-vars
namespace BoilerPlate {
    /* server Setting page closure*/
    export function ServerSettingsPage(): IPluginSettingPage<IServerSettings> {
        
        let self: IPluginSettingPage<IServerSettings> = {};
        if (window["ConfigPage"] !== undefined) {
            self = { ...Object.getPrototypeOf(new ConfigPage()) };
        }
        self.settings = { ...Plugin.config.customerSettingsPage.defaultSettings, ...configApp.getServerSetting(Plugin.config.customerSettingsPage.settingName, {}) };
        

        /** Customize this method to generate static HTML.  */
        self.getSettingsDOM = (settings: IServerSettings): JQuery => {
            return $(`
                <div class="panel-body-v-scroll fillHeight">
                    <div>
                        This is my customer settings page : ${settings.content}
                    </div>

                </div>
            `);
        };
        /** Customize this method to add dynamic content*/
        self.showSimple = () => {

            self.settingsOriginal = { ...self.serverSettings };
            if (!self.settingsChanged)
                 self.settingsChanged = { ...self.serverSettings };
            app.itemForm.append(self.getSettingsDOM( self.settingsChanged));
        };



        self.renderSettingPage = () => {
         
            self.initPage(
                `${Plugin.PLUGIN_NAME} - Server setting`,
                true,
                undefined,
                Plugin.config.customerSettingsPage.help,
                Plugin.config.customerSettingsPage.helpUrl,
                undefined
            );
            self.showSimple();
        };

        self.showAdvanced = () => {
            console.debug("Show advanced clicked");
            self.showAdvancedCode(JSON.stringify(self.settingsChanged), function (newCode: string) {
                self.settingsChanged = JSON.parse(newCode);
    
                self.paramChanged();
                self.renderSettingPage();
            });
        };
       
        
        self.saveAsync = () => {
            return configApp.setServerSettingAsync( Plugin.config.customerSettingsPage.settingName, JSON.stringify(self.settingsChanged));
        }

        self.paramChanged = () => {
            configApp.itemChanged(JSON.stringify(self.settingsOriginal) != JSON.stringify(self.settingsChanged));
        }
      
     
        return self;
    }
}
