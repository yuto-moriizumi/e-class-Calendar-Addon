export default class Button {
    private element;
    private button;
    private classId;
    private serviceId;
    private classInfo;
    private xButton;
    /**
     *Creates an instance of Button.
     * @param {string} classId ローカルストレージに保存する際にキーとして使用する講義ID
     * @param {string} serviceId ローカルストレージに保存する際にキーとして使用するサービス名称
     * @memberof Button
     */
    constructor(classId: string, serviceId: string);
    /**
     * 構築されたdiv要素を返します
     * @returns {HTMLElement}
     * @memberof Button
     */
    getElement(): HTMLElement;
    /**
     * リンクが有効な状態にします
     * @private
     * @memberof Button
     */
    private setStateAvailable;
    /**
     * リンクが無効な状態にします
     * @private
     * @memberof Button
     */
    private setStateUnavailable;
}
