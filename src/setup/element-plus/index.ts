import type { App } from 'vue';
import type { InstallOptions } from 'element-plus/lib/utils/config';
import ElementPlus from 'element-plus';

export function setupElement(app: App, options?: Partial<InstallOptions>) {
  app.use(ElementPlus, options)
}