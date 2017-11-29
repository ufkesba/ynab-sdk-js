export class Utils {
  /**
   * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
   */
  public getCurrentMonthInISOFormat() {
    let yearMonthISO = new Date(Date.now()).toLocaleString().substr(0, 7);
    let firstDayOfMonthISO = new Date(yearMonthISO).toISOString().substr(0, 10);
    return firstDayOfMonthISO;
  }

  /**
   * Converts an ISO 8601 formatted string to a JS date object
   * @param {string} isoDate - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
   */
  public convertISODateToDate(isoDate: string) {
    return new Date(new Date(isoDate));
  }

  /**
   * Converts an millidollars amount to a currency amount
   * @param millidollars - The millidollars amount (i.e. 293294)
   * @param currencyDecimalDigits - The number of decimals in the currency (i.e. 2 for USD)
   */
  public convertMilliDollarsToCurrencyAmount(
    millidollars: number,
    currencyDecimalDigits: number
  ): number {
    let numberToRoundTo = Math.pow(10, 3 - Math.min(3, currencyDecimalDigits));
    numberToRoundTo = 1 / numberToRoundTo;
    let rounded = Math.round(millidollars * numberToRoundTo) / numberToRoundTo;
    let currencyAmount = rounded * (0.1 / Math.pow(10, 2));
    return currencyAmount;
  }
}
