import rawAnalytics from "../data/analytics.json";
import { asRecord, bool, optString, str } from "../utils/cms-value";

/**
 * 第三方统计配置由后台（Sveltia CMS）写进 `src/data/analytics.json`。
 *
 * 这里只做「读 JSON + 兜底」，绝不 throw：后台是手改的，随时可能写出
 * 缺字段 / 类型不对 / 整个字段被删掉的内容，而这些值会在构建期被 Layout 用到。
 *
 * 关键约定：**容器 ID 非空＝启用 GTM**。
 * 关掉开关或 ID 格式不合法时，containerId 一律收敛成空串——
 * Layout 的 `<noscript>` 与 AnalyticsScripts 的加载逻辑都只看这一个条件，
 * 避免「JS 走新配置、禁用 JS 的访客仍打旧容器」这类两处判断不一致。
 */
const root = asRecord(rawAnalytics);
const gtm = asRecord(root?.gtm);
const clarity = asRecord(root?.clarity);

/** Google 官方容器 ID 形如 GTM-MDK9X7JK；不接受别的写法，免得请求发到奇怪地址 */
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

function readGtmContainerId(value: unknown): string {
	const raw = optString(value);
	return raw && GTM_ID_PATTERN.test(raw) ? raw : "";
}

const requestedGtmEnable = bool(gtm?.enable, false);
const validContainerId = readGtmContainerId(gtm?.containerId);
const gtmEnabled = requestedGtmEnable && validContainerId !== "";

if (requestedGtmEnable && !validContainerId) {
	console.warn(
		"[analytics] 后台已开启 GTM，但容器 ID 为空或格式不对（应为 GTM-XXXXXXX），已自动停用 GTM。" +
			"请到后台「站点设置 → 分析统计」修正。",
	);
}

const projectId = str(clarity?.projectId, "");
const requestedClarityEnable = bool(clarity?.enable, false);

export const analyticsConfig = {
	gtm: {
		enable: gtmEnabled,
		containerId: gtmEnabled ? validContainerId : "",
	},
	clarity: {
		enable: requestedClarityEnable && projectId !== "",
		projectId,
	},
};
