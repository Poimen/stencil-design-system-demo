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
   * Indicate if this is a primary button
   */
  @Prop() primary = false;
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
      primary, success, warning, danger, info,
      giant, large, medium, small, tiny
    } = this;

    return (
      <Host>
        <button
          part="button"
          type="button"
          class={{
            'flex items-center uppercase': true,
            'p-4': giant,
            'p-[14px]': large,
            'p-3': medium,
            'p-2': small,
            'p-[6px]': tiny,
            'text-primary-500': primary,
            'text-success-500': success,
            'text-warning-500': warning,
            'text-danger-500': danger,
            'text-info-500': info
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
