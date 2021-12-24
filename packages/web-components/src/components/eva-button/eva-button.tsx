import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @part button  - Styling applied to button container
 */
@Component({
  tag: 'eva-button',
  styleUrl: 'eva-button.css',
  shadow: true
})
export class EvaButton {
  /**
   * Indicate if this is a secondary button
   */
  @Prop() success = false;
  /**
   * Indicate if this is a warning button
   */
  @Prop() warning = false;
  /**
   * Indicate if this is a danger button
   */
  @Prop() danger = false;
  /**
   * Indicate if this is a info button
   */
  @Prop() info = false;
  /**
   * Indicate if this is a control button
   */
  @Prop() control = false;
  /**
   * Indicate if this is a basic button
   */
  @Prop() basic = false;
  /**
   * Indicate if this is a giant sized button
   */
  @Prop() giant = false;
  /**
   * Indicate if this is a large sized button
   */
  @Prop() large = false;
  /**
   * Indicate if this is a medium sized button
   */
  @Prop() medium = false;
  /**
   * Indicate if this is a small sized button
   */
  @Prop() small = false;
  /**
   * Indicate if this is a small sized button
   */
  @Prop() tiny = false;

  render() {
    const {
      success, warning, danger, info,
      giant, large, medium, small, tiny
    } = this;

    return (
      <Host>
        <button
          part="button"
          type="button"
          class={{
            'flex items-center uppercase text-white rounded-md': true,
            'p-4 text-button-giant': giant,
            'p-[14px] text-button-large': large,
            'p-3 text-button-medium': medium,
            'p-2 text-button-small': small,
            'p-[6px] text-button-tiny': tiny,
            'bg-success-500': success,
            'bg-warning-500': warning,
            'bg-danger-500': danger,
            'bg-info-500': info
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
