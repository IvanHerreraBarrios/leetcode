var maximumScore = function(nums, multipliers) {
    if (multipliers.length === 0) return 0

    const start = multipliers[0] * nums[0]
    const end = multipliers[0] * nums[nums.length-1]

    const s1 = start + maximumScore(nums.slice(1), multipliers.slice(1))

    const s2 = end + maximumScore(nums.slice(0, nums.length-1), multipliers.slice(1))

    return Math.max(s1,s2)
}