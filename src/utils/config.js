const columnConfig = [
    {
        column: 'Balance',
        ranges: [
            { min: 100, max: 1999999999, randomMin: 0.05, randomMax: 1 },
            { min: 2000000000, max: 2999999999, randomMin: 1.05, randomMax: 2 },
            { min: 3000000000, max: 3999999999, randomMin: 2.05, randomMax: 3 },
            { min: 4000000000, max: 4999999999, randomMin: 3.05, randomMax: 4 },
            { min: 5000000000, max: 5999999999, randomMin: 4.05, randomMax: 5 },
            { min: 6000000000, max: 6999999999, randomMin: 5.05, randomMax: 6 },
            { min: 7000000000, max: 7999999999, randomMin: 6.05, randomMax: 7 },
            { min: 8000000000, max: 19999000000000000, randomMin: 7.05, randomMax: 8 }
        ]
    },
    {
        column: 'Transactions',
        ranges: [
            { min: 1, max: 9, randomMin: 1, randomMax: 1.25 },
            { min: 10, max: 19, randomMin: 1.26, randomMax: 1.5 },
            { min: 20, max: 29, randomMin: 1.51, randomMax: 1.75 },
            { min: 30, max: 39, randomMin: 1.76, randomMax: 2 },
            { min: 40, max: 49, randomMin: 2.01, randomMax: 2.25 },
            { min: 50, max: 59, randomMin: 2.26, randomMax: 2.5 },
            { min: 60, max: 69, randomMin: 2.51, randomMax: 2.75 },
            { min: 70, max: 10000, randomMin: 2.76, randomMax: 3 }
        ]
    },
    {
        column: 'price',
        ranges: [
            { min: 0.0005, max: 1, randomMin: 0.01, randomMax: 0.05 },
            { min: 1.01, max: 2, randomMin: 1.01, randomMax: 2 },
            { min: 2.01, max: 3, randomMin: 2.01, randomMax: 3 },
            { min: 3.01, max: 4, randomMin: 3.01, randomMax: 4 },
            { min: 4.01, max: 5, randomMin: 4.01, randomMax: 5 },
            { min: 5.01, max: 6, randomMin: 5.01, randomMax: 6 },
            { min: 6.01, max: 7, randomMin: 6.01, randomMax: 7 },
            { min: 7.01, max: 9999, randomMin: 7.01, randomMax: 8 }
        ]
    },
    {
        column: 'maxpayout',
        ranges: [
            { transactions: 1, max: 0.09, weight: 0.056973754, weight1: 0.3, weight2: 0.25, weight3: 0.03, weight4: 0.025 },
            { transactions: 2, max: 0.18, weight: 0.52641836, weight1: 0.3, weight2: 0.15, weight3: 0.03, weight4: 0.015 },
            { transactions: 3, max: 0.27, weight: 0.09381716, weight1: 0.36381716, weight2: 0.18381716, weight3: 0.547634319, weight4: 0.27381716 },
            { transactions: 4, max: 0.36, weight: 0.122337207, weight1: 0.482337207, weight2: 0.212337207, weight3: 0.694674414, weight4: 0.302337207 },
            { transactions: 5, max: 0.45, weight: 0.512184378, weight1: 0.962184378, weight2: 0.602184378, weight3: 1.564368757, weight4: 0.692184378 },
            { transactions: 6, max: 0.54, weight: 0.156037516, weight1: 0.696037516, weight2: 0.246037516, weight3: 0.942075032, weight4: 0.336037516 },
            { transactions: 7, max: 0.63, weight: 0.1434424, weight1: 0.7734424, weight2: 0.2334424, weight3: 1.0068848, weight4: 0.3234424 },
            { transactions: 8, max: 0.72, weight: 0.956729764, weight1: 1.676729764, weight2: 1.046729764, weight3: 2.723459528, weight4: 1.136729764 },
            { transactions: 9, max: 0.81, weight: 0.953854555, weight1: 1.763854555, weight2: 1.043854555, weight3: 2.80770911, weight4: 1.133854555 },
            { transactions: 10, max: 0.9, weight: 0.960763124, weight1: 1.860763124, weight2: 1.050763124, weight3: 2.911526248, weight4: 1.140763124 },
            { transactions: 11, max: 0.99, weight: 0.683978696, weight1: 1.673978696, weight2: 0.773978696, weight3: 2.447957392, weight4: 0.863978696 },
            { transactions: 12, max: 1.08, weight: 0.851179941, weight1: 1.931179941, weight2: 0.941179941, weight3: 2.872359881, weight4: 1.031179941 },
            { transactions: 13, max: 1.17, weight: 0.273054574, weight1: 1.443054574, weight2: 0.363054574, weight3: 1.806109149, weight4: 0.453054574 },
            { transactions: 14, max: 1.26, weight: 0.806301395, weight1: 2.066301395, weight2: 0.896301395, weight3: 2.962602791, weight4: 0.986301395 },
            { transactions: 15, max: 1.35, weight: 0.09688869, weight1: 1.44688869, weight2: 0.18688869, weight3: 1.63377738, weight4: 0.27688869 },
            { transactions: 16, max: 1.44, weight: 0.53426191, weight1: 1.97426191, weight2: 0.62426191, weight3: 2.59852382, weight4: 0.71426191 },
            { transactions: 17, max: 1.53, weight: 0.608191206, weight1: 2.138191206, weight2: 0.698191206, weight3: 2.836382411, weight4: 0.788191206 },
            { transactions: 18, max: 1.62, weight: 0.695521378, weight1: 2.315521378, weight2: 0.785521378, weight3: 3.101042757, weight4: 0.875521378 },
            { transactions: 19, max: 1.71, weight: 0.542587634, weight1: 2.252587634, weight2: 0.632587634, weight3: 2.885175269, weight4: 0.722587634 },
            { transactions: 20, max: 1.8, weight: 0.595104542, weight1: 2.395104542, weight2: 0.685104542, weight3: 3.080209085, weight4: 0.775104542 },
            { transactions: 21, max: 1.89, weight: 0.170616344, weight1: 2.060616344, weight2: 1.070616344, weight3: 3.131232689, weight4: 1.970616344 },
            { transactions: 22, max: 1.98, weight: 0.708449257, weight1: 2.688449257, weight2: 1.608449257, weight3: 4.296898514, weight4: 2.508449257 },
            { transactions: 23, max: 2.07, weight: 0.054304163, weight1: 2.124304163, weight2: 0.954304163, weight3: 3.078608326, weight4: 1.854304163 },
            { transactions: 24, max: 2.16, weight: 0.415283227, weight1: 2.575283227, weight2: 1.315283227, weight3: 3.890566453, weight4: 2.215283227 },
            { transactions: 25, max: 2.25, weight: 0.658974408, weight1: 2.908974408, weight2: 1.558974408, weight3: 4.467948817, weight4: 2.458974408 },
            { transactions: 26, max: 2.34, weight: 0.3235247, weight1: 2.6635247, weight2: 1.558974408, weight3: 4.467948817, weight4: 2.458974408 },
            { transactions: 27, max: 2.43, weight: 0.127194615, weight1: 2.557194615, weight2: 1.027194615, weight3: 3.58438923, weight4: 1.927194615 },
            { transactions: 28, max: 2.52, weight: 0.428160966, weight1: 2.948160966, weight2: 1.328160966, weight3: 4.276321932, weight4: 2.228160966 },
            { transactions: 29, max: 2.61, weight: 0.94471364, weight1: 3.55471364, weight2: 1.84471364, weight3: 5.39942728, weight4: 2.74471364 },
            { transactions: 30, max: 2.7, weight: 0.994886511, weight1: 3.694886511, weight2: 1.894886511, weight3: 5.589773022, weight4: 2.794886511 },
            { transactions: 31, max: 2.79, weight: 0.067280017, weight1: 2.857280017, weight2: 1.867280017, weight3: 4.724560035, weight4: 3.667280017 },
            { transactions: 32, max: 2.88, weight: 0.50904532, weight1: 3.38904532, weight2: 2.30904532, weight3: 5.69809064, weight4: 4.10904532 },
            { transactions: 33, max: 2.97, weight: 0.922801955, weight1: 3.892801955, weight2: 2.722801955, weight3: 6.61560391, weight4: 4.522801955 },
            { transactions: 34, max: 3.06, weight: 0.198828146, weight1: 3.258828146, weight2: 1.998828146, weight3: 5.257656291, weight4: 3.798828146 },
            { transactions: 35, max: 3.15, weight: 0.72171997, weight1: 3.87171997, weight2: 2.52171997, weight3: 6.393439939, weight4: 4.32171997 },
            { transactions: 36, max: 3.24, weight: 0.872672129, weight1: 4.112672129, weight2: 2.672672129, weight3: 6.785344258, weight4: 4.472672129 },
            { transactions: 37, max: 3.33, weight: 0.665506618, weight1: 3.995506618, weight2: 2.465506618, weight3: 6.461013235, weight4: 4.265506618 },
            { transactions: 38, max: 3.42, weight: 0.985262756, weight1: 4.405262756, weight2: 2.785262756, weight3: 7.190525512, weight4: 4.585262756 },
            { transactions: 39, max: 3.51, weight: 0.085110926, weight1: 3.595110926, weight2: 1.885110926, weight3: 5.480221853, weight4: 3.685110926 },
            { transactions: 40, max: 3.6, weight: 0.845062455, weight1: 4.445062455, weight2: 3.545062455, weight3: 7.99012491, weight4: 6.245062455 },
            { transactions: 41, max: 3.69, weight: 0.59730764, weight1: 4.28730764, weight2: 3.29730764, weight3: 7.58461528, weight4: 5.99730764 },
            { transactions: 42, max: 3.78, weight: 0.392940723, weight1: 4.172940723, weight2: 3.092940723, weight3: 7.265881447, weight4: 5.792940723 },
            { transactions: 43, max: 3.87, weight: 0.793001074, weight1: 4.663001074, weight2: 3.493001074, weight3: 8.156002147, weight4: 6.193001074 },
            { transactions: 44, max: 3.96, weight: 0.396205109, weight1: 4.356205109, weight2: 3.096205109, weight3: 7.452410219, weight4: 5.796205109 },
            { transactions: 45, max: 4.05, weight: 0.744847963, weight1: 4.794847963, weight2: 3.444847963, weight3: 8.239695926, weight4: 6.144847963 },
            { transactions: 46, max: 4.14, weight: 0.651328028, weight1: 4.791328028, weight2: 3.351328028, weight3: 8.142656056, weight4: 6.051328028 },
            { transactions: 47, max: 4.23, weight: 0.659832935, weight1: 4.889832935, weight2: 3.359832935, weight3: 8.24966587, weight4: 6.059832935 },
            { transactions: 48, max: 4.32, weight: 0.198884491, weight1: 4.518884491, weight2: 2.898884491, weight3: 7.417768982, weight4: 5.598884491 },
            { transactions: 49, max: 4.41, weight: 0.679001414, weight1: 5.089001414, weight2: 3.379001414, weight3: 8.468002828, weight4: 6.079001414 },
            { transactions: 50, max: 4.5, weight: 0.269890812, weight1: 4.769890812, weight2: 3.869890812, weight3: 8.639781624, weight4: 7.469890812 },
            { transactions: 51, max: 4.59, weight: 0.592573997, weight1: 5.182573997, weight2: 4.192573997, weight3: 9.375147994, weight4: 7.792573997 },
            { transactions: 52, max: 4.68, weight: 0.577509681, weight1: 5.257509681, weight2: 4.177509681, weight3: 9.435019361, weight4: 7.777509681 },
            { transactions: 53, max: 4.77, weight: 0.947670595, weight1: 5.717670595, weight2: 4.547670595, weight3: 10.26534119, weight4: 8.147670595 },
            { transactions: 54, max: 4.86, weight: 0.90805337, weight1: 5.76805337, weight2: 4.50805337, weight3: 10.27610674, weight4: 8.10805337 },
            { transactions: 55, max: 4.95, weight: 0.196058094, weight1: 5.146058094, weight2: 3.796058094, weight3: 8.942116187, weight4: 7.396058094 },
            { transactions: 56, max: 5.04, weight: 0.7337797, weight1: 5.7737797, weight2: 4.3337797, weight3: 10.1075594, weight4: 7.9337797 },
            { transactions: 57, max: 5.13, weight: 0.587607574, weight1: 5.717607574, weight2: 4.187607574, weight3: 9.905215148, weight4: 7.787607574 },
            { transactions: 58, max: 5.22, weight: 0.85832477, weight1: 6.07832477, weight2: 4.45832477, weight3: 10.53664954, weight4: 8.05832477 },
            { transactions: 59, max: 5.31, weight: 0.525755239, weight1: 5.835755239, weight2: 4.125755239, weight3: 9.961510478, weight4: 7.725755239 },
            { transactions: 60, max: 5.4, weight: 0.360154954, weight1: 5.760154954, weight2: 3.960154954, weight3: 9.720309908, weight4: 7.560154954 },
            { transactions: 61, max: 5.49, weight: 0.754545415, weight1: 6.244545415, weight2: 4.354545415, weight3: 10.59909083, weight4: 7.954545415 },
            { transactions: 62, max: 5.58, weight: 0.624079109, weight1: 6.204079109, weight2: 4.224079109, weight3: 10.42815822, weight4: 7.824079109 },
            { transactions: 63, max: 5.67, weight: 0.248216923, weight1: 5.918216923, weight2: 3.848216923, weight3: 9.766433845, weight4: 7.448216923 },
            { transactions: 64, max: 5.76, weight: 0.116504554, weight1: 5.876504554, weight2: 3.716504554, weight3: 9.593009107, weight4: 7.316504554 },
            { transactions: 65, max: 5.85, weight: 0.240280347, weight1: 6.090280347, weight2: 3.840280347, weight3: 9.930560694, weight4: 7.440280347 },
            { transactions: 66, max: 5.94, weight: 0.534632762, weight1: 6.474632762, weight2: 4.134632762, weight3: 10.60926552, weight4: 7.734632762 },
            { transactions: 67, max: 6.03, weight: 0.523814048, weight1: 6.553814048, weight2: 4.123814048, weight3: 10.6776281, weight4: 7.723814048 },
            { transactions: 68, max: 6.12, weight: 0.073961922, weight1: 6.193961922, weight2: 3.673961922, weight3: 9.867923843, weight4: 7.273961922 },
            { transactions: 69, max: 6.21, weight: 0.81037399, weight1: 7.02037399, weight2: 4.41037399, weight3: 11.43074798, weight4: 8.01037399 },
            { transactions: 70, max: 6.3, weight: 0.336039661, weight1: 6.636039661, weight2: 3.936039661, weight3: 10.57207932, weight4: 7.536039661 }
        ]
    }

];

function getObjectRange(columnName, targetValue) {
    const column = columnConfig.find(col => col.column === columnName);
    if (!column) {
        return null; // Return null if the column is not found
    }

    for (const range of column.ranges) {
        if (targetValue >= range.min && targetValue <= range.max) {
            return range;
        }
    }

    return null; // Return null if no matching range is found
}

function getPayoutRange(columnName, targetValue) {
    const column = columnConfig.find(col => col.column === columnName);
    if (!column) {
        return null; // Return null if the column is not found
    }

    for (const range of column.ranges) {
        if (targetValue == range.transactions) {
            return range;
        }
    }

    return null; // Return null if no matching range is found
}

function getLowestMinValue(columnName) {
    const column = columnConfig.find(col => col.column === columnName);
    if (!column) {
        return null; // Return null if the column is not found
    }
    let minValue = Number.MAX_VALUE;
  
    for (const range of column.ranges) {
        if (range.min < minValue) {
          minValue = range.min;
      }
    }
  
    return minValue;
  }

export { columnConfig, getObjectRange, getPayoutRange , getLowestMinValue};
