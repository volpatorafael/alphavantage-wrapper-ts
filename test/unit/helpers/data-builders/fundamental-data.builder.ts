export type BuiltResponse = {
  [key: string]: string;
};

export function givenCompanyOverviewResponse(
  data?: BuiltResponse,
): BuiltResponse {
  const obj = Object.assign(
    {
      Symbol: 'IBM',
      AssetType: 'Common Stock',
      Name: 'International Business Machines Corporation',
      Description: 'description',
      CIK: '51143',
      Exchange: 'NYSE',
      Currency: 'USD',
      Country: 'USA',
      Sector: 'TECHNOLOGY',
      Industry: 'COMPUTER & OFFICE EQUIPMENT',
      Address: '1 NEW ORCHARD ROAD, ARMONK, NY, US',
      FiscalYearEnd: 'December',
      LatestQuarter: '2021-09-30',
      MarketCapitalization: '114446615000',
      EBITDA: '16436000000',
      PERatio: '24.17',
      PEGRatio: '1.469',
      BookValue: '24.78',
      DividendPerShare: '6.54',
      DividendYield: '0.0511',
      EPS: '5.28',
      RevenuePerShareTTM: '83.23',
      ProfitMargin: '0.064',
      OperatingMarginTTM: '0.13',
      ReturnOnAssetsTTM: '0.0406',
      ReturnOnEquityTTM: '0.214',
      RevenueTTM: '74461004000',
      GrossProfitTTM: '35575000000',
      DilutedEPSTTM: '5.28',
      QuarterlyEarningsGrowthYOY: '-0.338',
      QuarterlyRevenueGrowthYOY: '0.003',
      AnalystTargetPrice: '151.12',
      TrailingPE: '24.17',
      ForwardPE: '10.74',
      PriceToSalesRatioTTM: '1.537',
      PriceToBookRatio: '5.16',
      EVToRevenue: '2.223',
      EVToEBITDA: '12.76',
      Beta: '1.181',
      '52WeekHigh': '151.1',
      '52WeekLow': '100.73',
      '50DayMovingAverage': '138.74',
      '200DayMovingAverage': '141.54',
      SharesOutstanding: '896320000',
      SharesFloat: '895521000',
      SharesShort: '25805200',
      SharesShortPriorMonth: '25087600',
      ShortRatio: '7.16',
      ShortPercentOutstanding: '0.03',
      ShortPercentFloat: '0.0288',
      PercentInsiders: '0.133',
      PercentInstitutions: '57.78',
      ForwardAnnualDividendRate: '6.56',
      ForwardAnnualDividendYield: '0.0513',
      PayoutRatio: '0.58',
      DividendDate: '2021-09-10',
      ExDividendDate: '2021-08-09',
      LastSplitFactor: '2:1',
      LastSplitDate: '1999-05-27',
    },
    data,
  );

  return obj;
}

export function givenEarningsResponse(data?: BuiltResponse): BuiltResponse {
  const obj = Object.assign(
    {
      symbol: 'IBM',
      annualEarnings: [
        {
          fiscalDateEnding: '2022-09-30',
          reportedEPS: '3.71',
        },
        {
          fiscalDateEnding: '2021-12-31',
          reportedEPS: '9.97',
        },
      ],
      quarterlyEarnings: [
        {
          fiscalDateEnding: '2022-06-30',
          reportedDate: '2022-07-18',
          reportedEPS: '2.31',
          estimatedEPS: '2.27',
          surprise: '0.04',
          surprisePercentage: '1.7621',
        },
        {
          fiscalDateEnding: '2022-03-31',
          reportedDate: '2022-04-19',
          reportedEPS: '1.4',
          estimatedEPS: '1.38',
          surprise: '0.02',
          surprisePercentage: '1.4493',
        },
      ],
    },
    data,
  );

  return obj;
}
