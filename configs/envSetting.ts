import * as envSetting from "./domain.json"
import * as platformSetting from "./platform.json"

export const setting = {
    domain: envSetting.domain,
    platform: platformSetting.platformName,
    height: platformSetting.browserHeight,
    width: platformSetting.browserWidth
}