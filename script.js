// 完整的100道题库
const questionBank = [
    // 悦己维度题目 (1-20)
    {
        id: 1,
        dimension: "yueji",
        question: "一项重要任务遇到了一个知识盲区，且超出您当前职责范围。您会首先？",
        options: [
            "A. 向上级说明情况，请求指派更合适的人或提供培训。",
            "B. 将其分解，先完成熟悉的部分，难题留待集体解决。",
            "C. 立即开始自学，查阅资料，力求靠自己攻克。",
            "D. 向可能懂行的同事非正式请教，快速获取关键信息以推进工作。"
        ],
        scores: [1, 2, 4, 3]
    },
    {
        id: 2,
        dimension: "yueji",
        question: "您独立发现并解决了一个潜在问题，为公司避免了损失，但无人知晓。您会？",
        options: [
            "A. 略感遗憾，但觉得问心无愧就好。",
            "B. 在适当的场合（如周报）中委婉提及。",
            "C. 寻找机会向领导详细汇报过程，以展现能力。",
            "D. 将此事作为案例与团队分享，帮助大家预防同类问题。"
        ],
        scores: [3, 2, 2, 4]
    },
    {
        id: 3,
        dimension: "yueji",
        question: "上级给您布置了一个您认为意义不大、重复性高的任务。您会？",
        options: [
            "A. 按部就班完成，不多想。",
            "B. 高效完成，以腾出时间做更有价值的事。",
            "C. 向上级提出疑问，探讨任务的目的与优化可能。",
            "D. 在完成任务的同时，思考其背景目的，并尝试优化流程让其更高效。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 4,
        dimension: "yueji",
        question: "公司举办一场与您当前工作关联不大的前沿技术讲座。您会？",
        options: [
            "A. 工作很忙，不参加了。",
            "B. 如果强制要求或顺路就去听听。",
            "C. 主动参加，觉得开阔眼界总没坏处。",
            "D. 不仅参加，还会提前了解背景，带着问题去听，并思考如何跨界应用。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 5,
        dimension: "yueji",
        question: "您主导的项目取得了远超预期的成功。庆功会后，您独自一人时，最大的感想是？",
        options: [
            "A. 终于可以放松一下了。",
            "B. 团队的努力没有白费。",
            "C. 我的能力和决策得到了验证，这感觉太棒了。",
            "D. 这次成功验证了我们模式的可行性，下一个挑战在哪里？"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 6,
        dimension: "yueji",
        question: "您花很大精力做了一份自认为完美的方案，却被领导否决。您会？",
        options: [
            "A. 感到沮丧，暂时不想碰这个项目了。",
            "B. 尊重决定，按领导的意思执行。",
            "C. 平静地询问否决的具体原因和优化方向。",
            "D. 认为领导可能有没看到的价值，准备更充分的论据再次沟通。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 7,
        dimension: "yueji",
        question: "您的工作流程已经非常高效，但您偶然发现了一个可能再提升5%效率的方法，不过需要改变习惯。您会？",
        options: [
            "A. 既然当前效率已够，就不折腾了。",
            "B. 记录下来，等有空再试。",
            "C. 立即尝试新方法，看看效果。",
            "D. 尝试并验证后，将其标准化，并分享给同事。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 8,
        dimension: "yueji",
        question: "您被邀请加入一个跨部门创新项目，这可能占用您大量业余时间且无额外报酬。您会？",
        options: [
            "A. 以本职工作繁忙为由婉拒。",
            "B. 只参与自己职责相关的部分会议。",
            "C. 接受，认为这是学习新领域和拓展人脉的好机会。",
            "D. 接受，并被项目本身的意义和挑战性所吸引。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 9,
        dimension: "yueji",
        question: "您如何规划您的职业发展？",
        options: [
            "A. 做好眼前事，相信公司和领导会看到。",
            "B. 关注公司内部的晋升机会和空缺岗位。",
            "C. 有清晰的个人成长路径，并主动寻求所需的学习和项目经历。",
            "D. 将公司发展与自己的人生目标结合，追求在平台上实现自我价值。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 10,
        dimension: "yueji",
        question: "您认为对您工作表现最重要的评价来自于？",
        options: [
            "A. 上级的绩效考核结果。",
            "B. 同事和客户的口碑。",
            "C. 自我审视与目标达成度的对比。",
            "D. 所做工作对公司和客户产生的实际影响。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 11,
        dimension: "yueji",
        question: "当一个重要任务进入枯燥的执行阶段时，您如何保持动力？",
        options: [
            "A. 靠责任心和纪律性。",
            "B. 想象任务完成后的回报和放松。",
            "C. 在重复性工作中寻找可以优化的细节，将其变为游戏。",
            "D. 提醒自己这个阶段对最终成果的基础性作用，聚焦于终极目标。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 12,
        dimension: "yueji",
        question: "您如何看待公司要求的、但与您岗位直接关系不大的文书或流程工作？",
        options: [
            "A. 必要的麻烦，应付过去就行。",
            "B. 按规定完成，避免出错。",
            "C. 将其视为了解公司运营逻辑的一个窗口。",
            "D. 思考这些要求背后的管理目的，并，并尝试让自己的工作更符合规范。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 13,
        dimension: "yueji",
        question: "您的一项一项专业技能在团队中遥遥领先。此时，您会？",
        options: [
            "A. 保持优势，这是立身之本。",
            "B. 乐于解答同事的疑问。",
            "C. 主动组织小培训，提升团队整体水平。",
            "D. 担心教会徒弟，饿死师傅，有所保留。"
        ],
        scores: [2, 3, 4, 1]
    },
    {
        id: 14,
        dimension: "yueji",
        question: "在评估一个工作机会时，您最看重的因素是？",
        options: [
            "A. 薪酬福利和工作稳定性。",
            "B. 职位高低和团队氛围。",
            "C. 工作内容是否能发挥我的优势并带来成长。",
            "D. 平台和事业是否能让我实现个人抱负与社会价值。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 15,
        dimension: "yueji",
        question: "您花了很多心血的一个项目因外部原因被叫停。您会？",
        options: [
            "A. 感到解脱，终于不用再投入了。",
            "B. 非常失望，觉得努力白费了。",
            "C. 总结经验教训，为未来项目储备知识。",
            "D. 整理项目过程中的创新点，看能否应用于其他领域。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 16,
        dimension: "yueji",
        question: "您更喜欢的工作反馈方式是？",
        options: [
            "A. 定期的、正式的绩效面谈。",
            "B. 随时随地的、非正式的即时反馈。",
            "C. 让我先自我评估，再与上级交流。",
            "D. 基于清晰的数据和事实的客观反馈。"
        ],
        scores: [2, 2, 4, 3]
    },
    {
        id: 17,
        dimension: "yueji",
        question: "您如何利用工作中的碎片化时间（如等待会议时）？",
        options: [
            "A. 休息放松，刷刷手机。",
            "B. 处理一些不费神的小任务。",
            "C. 规划下一阶段的工作安排。",
            "D. 阅读一篇行业资讯或学习一个工作小技巧。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 18,
        dimension: "yueji",
        question: "公司举办内部创新竞赛，您的想法初选入围，但后续需要投入大量业余时间完善。您会？",
        options: [
            "A. 到此为止，已经证明了想法。",
            "B. 简单做一下，不强求结果。",
            "C. 投入时间，尽力争取名次和奖励。",
            "D. 被想法落地的可能性所吸引，全力投入将其实现，不计较奖励。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 19,
        dimension: "yueji",
        question: "您认为工作和生活的关系应该是？",
        options: [
            "A. 泾渭分明，互不打扰。",
            "B. 生活为主，工作是为了更好的生活。",
            "C. 工作是生活的重要组成部分，二者可以融合。",
            "D. 通过工作实现生活理想，二者是一体的。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 20,
        dimension: "yueji",
        question: "当您成功帮助一位同事后，您期望？",
        options: [
            "A. 对方能记住这个人情。",
            "B. 对方在公开场合表示感谢。",
            "C. 没有任何期望，帮助本身是应该的。",
            "D. 看到对方因我的帮助而获得成长和成功。"
        ],
        scores: [1, 2, 3, 4]
    },

    // 利他维度题目 (21-50)
    {
        id: 21,
        dimension: "lita",
        question: "您正在为一个重要项目的截止日期忙碌，一位新同事向您求助一个与您项目无关但困扰他已久的问题。您会？",
        options: [
            "A. 直接告诉他您很忙，让他自己去问别人。",
            "B. 快速给他指个方向，然后继续自己的工作。",
            "C. 与他约定一个您稍后空闲的时间，再详细帮他解答。",
            "D. 先花几分钟了解问题核心，给出关键指导，让他能继续推进。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 22,
        dimension: "lita",
        question: "一位客户/同事因为误解而对您大发雷霆，但错误其实不在您。您会？",
        options: [
            "A. 立即打断他，据理力争，澄清事实。",
            "B. 保持沉默，等他发泄完再说。",
            "C. 先耐心倾听，安抚他的情绪，表示理解他的感受。",
            "D. 在C的基础上，引导他梳理问题，共同找出误会点并解决。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 23,
        dimension: "lita",
        question: "您发现一位同事在工作中犯了一个错误，这个错误暂时不会影响您。您会？",
        options: [
            "A. 不关我事，假装没看见。",
            "B. 私下提醒他，避免错误扩大。",
            "C. 在提醒他的同时，主动询问是否需要帮助一起弥补。",
            "D. 思考这个错误是否源于流程缺陷，并推动流程优化。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 24,
        dimension: "lita",
        question: "您有一个能提升效率的好方法，您会？",
        options: [
            "A. 自己使用就好，这是自己的竞争优势。",
            "B. 如果别人问起，就告诉他们。",
            "C. 主动与团队伙伴分享。",
            "D. 不仅分享，还制作成简单的教程，方便大家学习。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 25,
        dimension: "lita",
        question: "一位同事在公开场合质疑了您的方案，让您有些难堪。会后您会？",
        options: [
            "A. 记在心里，以后也找机会让他难堪。",
            "B. 避免再与他合作。",
            "C. 私下找他沟通，了解他质疑的具体原因，看是否能完善方案。",
            "D. 感谢他提出了不同的视角，让方案考虑更周全。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 26,
        dimension: "lita",
        question: "您超额完成了任务，有了一些空闲时间。您会？",
        options: [
            "A. 休息一下，等待下一个任务。",
            "B. 提前开始做下个阶段的工作。",
            "C. 看看周围的同事谁需要帮忙。",
            "D. 系统性地梳理工作经验，形成知识库供团队参考。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 27,
        dimension: "lita",
        question: "您代表公司接待一位重要访客，对方舟车劳顿。在正式会谈前，您会？",
        options: [
            "A. 直接开始正式议程。",
            "B. 简单问候后进入议程。",
            "C. 先关心对方的旅途感受，为其安排好休息。",
            "D. 在C的基础上，提前了解对方的喜好，准备一些贴心的安排。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 28,
        dimension: "lita",
        question: "您和另一位同事合作一个项目，他的部分进展缓慢，可能影响整体。您会？",
        options: [
            "A. 向领导汇报他的问题。",
            "B. 催促他尽快完成。",
            "C. 了解他遇到的困难，给予建议。",
            "D. 在C的基础上，主动分担一部分力所能及的任务。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 29,
        dimension: "lita",
        question: "您无意中得知一位同事正在经历个人困难，情绪低落。您会？",
        options: [
            "A. 当作不知道，避免尴尬。",
            "B. 在遇到时简单问候一下。",
            "C. 找个私人时间，真诚地关心他，并表示如果需要可以倾听。",
            "D. 在C的基础上，和团队一起，在实际事务上提供一些帮助。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 30,
        dimension: "lita",
        question: "您认为服务精神意味着？",
        options: [
            "A. 完成岗位说明书上要求的服务内容。",
            "B. 对客户/同事的要求做出快速响应。",
            "C. 预见客户/同事的需求，并主动提供帮助。",
            "D. 将成就他人、支持他人作为工作的乐趣之一。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 31,
        dimension: "lita",
        question: "您负责的项目需要选择一个供应商。A是合作过的熟人，B是陌生但方案更优的公司。您会？",
        options: [
            "A. 选择A，熟人好办事。",
            "B. 选择B，但对A感到抱歉。",
            "C. 组织公开评审，让最优方案胜出。",
            "D. 在C的基础上，向A解释原因，并感谢其参与。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 32,
        dimension: "lita",
        question: "一位客户提出了一个非常规的、合理的个性化需求，但满足它会增加您不少工作量。您会？",
        options: [
            "A. 以不符合规定为由婉拒。",
            "B. 表示需要请示上级，借此推脱。",
            "C. 评估可行性后，如果合理则尽力满足。",
            "D. 将其视为服务创新的机会，在满足的同时思考能否标准化惠及其他客户。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 33,
        dimension: "lita",
        question: "您发现公司某个公共区域的设施（如打印机）坏了，但您自己并不急用。您会？",
        options: [
            "A. 反正有人会报修，不用管。",
            "B. 告诉经常使用它的同事。",
            "C. 自己尝试联系行政或报修。",
            "D. 在报修的同时，贴个临时便签提醒他人。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 34,
        dimension: "lita",
        question: "团队获得了一笔额外奖金，由您负责分配。您会？",
        options: [
            "A. 主要按职级分配。",
            "B. 主要按个人业绩分配。",
            "C. 在业绩基础上，考虑那些贡献不易量化但很重要的成员。",
            "D. 组织团队讨论，共同商定一个大家都认可的分配方案。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 35,
        dimension: "lita",
        question: "您离职后，一位接任的新同事经常打电话向您请教问题。您会？",
        options: [
            "A. 偶尔接听，简单说几句。",
            "B. 明确告知对方已离职，不便再打扰。",
            "C. 在方便时给予解答，帮助其顺利过渡。",
            "D. 将常见问题整理成文档发给他，减少后续打扰。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 36,
        dimension: "lita",
        question: "您无意中听到了两位同事在争论，内容涉及您的专业领域。您会？",
        options: [
            "A. 假装没听见，避免卷入。",
            "B. 走过去，直接告诉他们正确答案。",
            "C. 等他们争论暂停时，再介入提供专业信息。",
            "D. 事后私下找其中一位可能更愿意接受的同事，委婉说明情况。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 37,
        dimension: "lita",
        question: "您负责培训一位新人，但他学习速度较慢，影响了您的工作效率。您会？",
        options: [
            "A. 向领导反映情况，请求换人或减少自己的任务。",
            "B. 只教基础内容，让他自己摸索。",
            "C. 保持耐心，尝试用不同的方法讲解。",
            "D. 在C的基础上，为他制定更详细的学习计划和练习任务。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 38,
        dimension: "lita",
        question: "您同事的客户来找他，但他正好不在。客户显得很焦急。您会？",
        options: [
            "A. 告知客户同事不在，让其等待或改天再来。",
            "B. 帮客户联系同事，确认其返回时间。",
            "C. 主动询问客户事由，如果在自己权限内则协助处理。",
            "D. 在C的基础上，事后详细转告同事，并交接清楚。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 39,
        dimension: "lita",
        question: "公司号召为困难员工捐款，您会？",
        options: [
            "A. 按公司建议的标准捐款。",
            "B. 根据自己的经济情况量力而行，捐一份心意。",
            "C. 不仅捐款，还会私下关心该同事，提供其他帮助。",
            "D. 在C的基础上，思考如何从制度上为类似情况的员工提供长期保障。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 40,
        dimension: "lita",
        question: "您成功解决了一个技术难题，同事称赞您。您会？",
        options: [
            "A. 谦虚地说没什么，运气好。",
            "B. 高兴地接受称赞。",
            "C. 分享解决过程中遇到的困难和思路。",
            "D. 强调这是团队协作的结果，感谢提供过帮助的人。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 41,
        dimension: "lita",
        question: "您发现上级做出了一个您认为不太理想的决策。您会？",
        options: [
            "A. 严格执行，不做多想。",
            "B. 私下向更高级领导反映。",
            "C. 收集数据和案例，找合适时机与上级理性探讨。",
            "D. 在执行过程中，尽量优化细节，弥补决策可能的不足。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 42,
        dimension: "lita",
        question: "您负责分发团队福利，最后多出一份。您会？",
        options: [
            "A. 自己留下，反正没人知道。",
            "B. 交给上级处理。",
            "C. 主动告知团队，并提议如何处理（如抽奖或留给下次）。",
            "D. 给团队里最辛苦或最近有特殊贡献的同事。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 43,
        dimension: "lita",
        question: "您需要与合作公司的接口人共同完成一个任务，但他非常不配合。您会？",
        options: [
            "A. 向对方领导投诉。",
            "B. 向自己的领导求助，请其协调。",
            "C. 尝试了解他不配合的原因，寻找共同利益点。",
            "D. 在C的基础上，主动承担更多前期工作，用诚意和成果打动他。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 44,
        dimension: "lita",
        question: "您的一位下属/同事能力很强，但个性鲜明，难以管理/合作。您会？",
        options: [
            "A. 重点使用其能力，容忍其个性。",
            "B. 尝试改变他的个性，使其符合团队要求。",
            "C. 扬长避短，分配能发挥其优势的任务。",
            "D. 在C的基础上，真诚沟通，帮助他理解团队协作的重要性。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 45,
        dimension: "lita",
        question: "您负责一个项目，两位组员因观点不合发生争执，影响了进度。您会？",
        options: [
            "A. 让他们自己解决，领导者不宜过度介入。",
            "B. 强行拍板，采用其中一个方案。",
            "C. 分别沟通，了解双方诉求和顾虑。",
            "D. 组织会议，引导双方聚焦共同目标，整合出一个更优方案。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 46,
        dimension: "lita",
        question: "您发现公司存在一个管理漏洞，可能造成损失但无人察觉。您会？",
        options: [
            "A. 多一事不如少一事。",
            "B. 匿名向上级反映。",
            "C. 通过正常渠道实名提出，并附上改进建议。",
            "D. 在C的基础上，主动请缨参与漏洞的修补工作。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 47,
        dimension: "lita",
        question: "您的一位同事总是在公开场合炫耀自己的成绩，您会？",
        options: [
            "A. 内心反感，疏远他。",
            "B. 不以为然，做好自己。",
            "C. 私下提醒他，注意团队感受。",
            "D. 在团队中创造互相认可的氛围，让每个人的贡献都被看见。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 48,
        dimension: "lita",
        question: "您在工作中获得了宝贵的学习或培训机会。回来后，您会？",
        options: [
            "A. 将资料整理好，供自己日后参考。",
            "B. 在部门内做一次简单的分享。",
            "C. 根据学习内容，提出改进本职工作的具体计划。",
            "D. 形成一套可供团队复制推广的方法论或工具。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 49,
        dimension: "lita",
        question: "您负责面试一位候选人，他能力不错，但您感觉他可能与团队现有成员风格不太契合。您会？",
        options: [
            "A. 否决，团队和谐最重要。",
            "B. 通过，能力是硬道理。",
            "C. 在面试中深入考察其协作能力和价值观。",
            "D. 将情况反馈给用人部门负责人，由他最终权衡。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 50,
        dimension: "lita",
        question: "在您看来，最能体现利他文化的行为是？",
        options: [
            "A. 同事间互赠小礼物。",
            "B. 在他人遇到困难时伸出援手。",
            "C. 为了集体利益，愿意牺牲部分个人利益。",
            "D. 建立起一套能让所有人都受益的机制。"
        ],
        scores: [1, 2, 3, 4]
    },

    // 同栖维度题目 (51-75)
    {
        id: 51,
        dimension: "tongqi",
        question: "跨部门会议上，另一个部门的同事提出了一个您认为有明显漏洞的方案。您会？",
        options: [
            "A. 事不关己，沉默不语，反正不是自己部门的责任。",
            "B. 在会议上直接指出漏洞，并要求对方部门整改。",
            "C. 会后私下联系对方，委婉地提出您的建议。",
            "D. 在会议上，首先肯定方案的价值，然后以探讨的语气提出您的疑问和补充建议。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 52,
        dimension: "tongqi",
        question: "团队要筹备一次重要的客户活动，但预算有限。您会？",
        options: [
            "A. 按最低标准执行，避免超支。",
            "B. 向上级申请更多预算。",
            "C. 发动团队成员各自贡献资源和创意，共同想办法。",
            "D. 在C的基础上，主动贡献自己的额外资源或人脉。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 53,
        dimension: "tongqi",
        question: "您得知公司另一个团队正在做一个项目，与您手头的工作有部分重叠。您会？",
        options: [
            "A. 各自为政，做好自己的部分。",
            "B. 向领导汇报，请领导协调分工。",
            "C. 主动联系对方团队负责人，沟通信息，探讨合作可能。",
            "D. 在C的基础上，提议建立定期沟通机制，共享成果，避免重复劳动。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 54,
        dimension: "tongqi",
        question: "团队中获得了一个外出培训的珍贵名额。您非常想去，但您知道另一位同事也可能需要。您会？",
        options: [
            "A. 积极争取，因为机会难得。",
            "B. 等待领导决定。",
            "C. 与那位同事沟通，看谁更适合或更需要这个机会。",
            "D. 主动推荐那位同事，认为他/她去更能给团队带来价值。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 55,
        dimension: "tongqi",
        question: "您所在团队的文化氛围有些松散，凝聚力不足。您会？",
        options: [
            "A. 做好自己就行。",
            "B. 向领导反映情况。",
            "C. 主动组织一些非正式的团队建设活动。",
            "D. 在团队中主动营造积极、互助的氛围，成为团队的黏合剂。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 56,
        dimension: "tongqi",
        question: "您和另一位同事合作完成的任务得到了客户的高度赞扬。客户特别提到了您的贡献。您会？",
        options: [
            "A. 欣然接受客户的表扬。",
            "B. 向客户说明这是团队共同努力的结果。",
            "C. 在内部总结时，重点强调同事的贡献。",
            "D. 将客户表扬转化为对整个团队的认可，庆祝团队的成功。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 57,
        dimension: "tongqi",
        question: "公司举办年会，要求每个部门出节目。您会？",
        options: [
            "A. 能不参加就不参加。",
            "B. 如果被要求，就参与一下。",
            "C. 积极报名参与表演或筹备。",
            "D. 不仅自己参与，还动员其他同事一起参加，享受这个过程。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 58,
        dimension: "tongqi",
        question: "一位新同事加入团队，显得有些拘谨。您会？",
        options: [
            "A. 等待他/她主动融入。",
            "B. 在必要的工作交流时表示欢迎。",
            "C. 主动介绍团队成员和公司环境，邀请他/她共进午餐。",
            "D. 在C的基础上，主动关心他/她的工作适应情况，给予帮助。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 59,
        dimension: "tongqi",
        question: "团队内部因为一个决策产生了分歧，形成了两派意见。您会？",
        options: [
            "A. 选择站在多数派一边。",
            "B. 保持中立，等待领导裁决。",
            "C. 尝试在两派意见中寻找共同点，提出折中方案。",
            "D. 促进双方坦诚沟通，确保每个人都被倾听，引导团队达成共识。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 60,
        dimension: "tongqi",
        question: "您发现公司某个公共区域的布置可以优化，更能体现家的氛围。您会？",
        options: [
            "A. 想想而已，这不归我管。",
            "B. 向行政部门提个建议。",
            "C. 自己动手做一些小的改善（如添置绿植、整理书架）。",
            "D. 发起一个小型共建活动，邀请同事一起美化空间。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 61,
        dimension: "tongqi",
        question: "您所在的业务板块与另一个板块因资源分配产生了矛盾。您会？",
        options: [
            "A. 为自己板块争取最大利益。",
            "B. 将矛盾上交，请上级裁决。",
            "C. 主动与对方板块沟通，试图理解对方的困难。",
            "D. 站在公司整体利益的角度，提出一个对双方都相对公平且有利于公司的解决方案。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 62,
        dimension: "tongqi",
        question: "您在工作中积累了一份非常实用的避坑指南（常见错误汇总）。您会？",
        options: [
            "A. 自己保存好，避免再犯。",
            "B. 如果新人来问，就分享给他。",
            "C. 主动分享给团队里的所有人。",
            "D. 将其整理成标准文件，纳入新员工入职培训材料。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 63,
        dimension: "tongqi",
        question: "团队要完成一个紧急任务，需要有人加班。您今晚已有个人安排。您会？",
        options: [
            "A. 直接说明已有安排，无法加班。",
            "B. 如果被要求，再协调个人安排。",
            "C. 主动询问任务情况，如果非常紧急且重要，则协调个人安排予以支持。",
            "D. 在C的基础上，如果自己实在无法参与，会想办法通过其他方式提供远程支持。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 64,
        dimension: "tongqi",
        question: "您听到有同事在散布关于公司或其他同事的负面小道消息。您会？",
        options: [
            "A. 听听就算了，不参与也不传播。",
            "B. 提醒他/她不要乱说。",
            "C. 正面讲述公司或同事的优点，引导积极舆论。",
            "D. 在合适的场合，倡导建设性沟通的原则，维护健康的舆论环境。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 65,
        dimension: "tongqi",
        question: "您负责的一个项目取得了成功，上级让您推荐有功人员。您会？",
        options: [
            "A. 主要推荐和自己关系好或直接下属。",
            "B. 凭记忆列出主要贡献者。",
            "C. 在项目结束时就已经整理好贡献者名单。",
            "D. 在C的基础上，特别关注那些在幕后做出贡献的无名英雄。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 66,
        dimension: "tongqi",
        question: "公司组织健康即日常主题活动，如跑步、读书会等。您会？",
        options: [
            "A. 很少参加。",
            "B. 选择自己感兴趣的活动参加。",
            "C. 积极参加，并将其视为融入团队和文化的机会。",
            "D. 主动承担活动的部分组织工作，或积极在活动中带动氛围。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 67,
        dimension: "tongqi",
        question: "您团队的一位成员因为个人原因，工作状态持续不佳，影响了团队士气。您会？",
        options: [
            "A. 向领导汇报，建议对其进行处理。",
            "B. 在团队会议上不点名地提出批评。",
            "C. 私下与他/她沟通，表示关心，了解困难，提供帮助。",
            "D. 在C的基础上，暂时调整他/她的工作负荷，并发动团队给予支持。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 68,
        dimension: "tongqi",
        question: "您认为一个理想的团队应该像什么？",
        options: [
            "A. 一支足球队，分工明确，各司其职。",
            "B. 一个交响乐团，在指挥下精准配合。",
            "C. 一个家庭，互相关心，共同成长。",
            "D. 一个生命共同体，一荣俱荣，一损俱损。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 69,
        dimension: "tongqi",
        question: "在招聘新团队成员时，您最看重的特质是？",
        options: [
            "A. 个人能力和经验。",
            "B. 对工作的热情。",
            "C. 团队合作精神。",
            "D. 其价值观与团队、公司文化的契合度。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 70,
        dimension: "tongqi",
        question: "您如何理解聚善即归属？",
        options: [
            "A. 多做善事，就能获得好名声。",
            "B. 与人为善，能获得更好的人际关系。",
            "C. 大家共同行善、互助，能形成强大的凝聚力，让人有归属感。",
            "D. 公司通过建立机制，让善行被鼓励、被看见，从而形成向善的生态，让身处其中的人有归属感。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 71,
        dimension: "tongqi",
        question: "团队准备尝试一个全新的、有风险的业务方向。您会？",
        options: [
            "A. 保守起见，反对冒险。",
            "B. 听从大多数人的意见。",
            "C. 在经过调研后，谨慎地表达支持。",
            "D. 积极支持，并主动承担前期研究和探索任务，与团队共担风险。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 72,
        dimension: "tongqi",
        question: "您因工作出色获得了一笔可观的奖金。您会？",
        options: [
            "A. 全部自己留存。",
            "B. 请团队吃顿饭。",
            "C. 拿出一部分作为团队活动经费或奖励团队中的辅助人员。",
            "D. 设立一个小型的团队创新基金，鼓励团队的创新行为。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 73,
        dimension: "tongqi",
        question: "您在工作中与某位同事性格不合，合作起来很别扭。您会？",
        options: [
            "A. 尽量减少与他的合作。",
            "B. 公事公办，只进行必要的工作交流。",
            "C. 主动尝试了解他，寻找共同的兴趣或目标。",
            "D. 尊重彼此的差异，将焦点放在共同的任务目标上，优先保障合作成效。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 74,
        dimension: "tongqi",
        question: "您认为维护家文化最重要的是什么？",
        options: [
            "A. 明确的规则和制度。",
            "B. 领导者的以身作则。",
            "C. 成员间的相互信任与关怀。",
            "D. 持续不断的、用心的经营和建设。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 75,
        dimension: "tongqi",
        question: "当您看到桃李健康社区的业主们其乐融融时，您作为员工，最大的感受是？",
        options: [
            "A. 这是他们的事情，与我的工作关系不大。",
            "B. 感到欣慰，说明我们的产品和服务是成功的。",
            "C. 有成就感，因为我也为营造这个场景贡献了力量。",
            "D. 有归属感，仿佛我也是这个温暖大家庭的一份子。"
        ],
        scores: [1, 2, 3, 4]
    },

    // 共生维度题目 (76-100)
    {
        id: 76,
        dimension: "gongsheng",
        question: "您负责一个项目的供应商选择。A供应商价格最低，但业界口碑一般；B供应商价格高5%，但产品质量、环保标准和售后服务都非常出色。您的推荐是？",
        options: [
            "A. 推荐A供应商，因为成本是首要考量。",
            "B. 推荐B供应商，但需要他们再降价。",
            "C. 撰写报告，说明选择B在质量风险、客户满意度、品牌声誉和长期维护成本上更具优势，建议投资于未来。",
            "D. 引入第三方评估，综合考量其与公司长期战略的契合度。"
        ],
        scores: [1, 2, 4, 3]
    },
    {
        id: 77,
        dimension: "gongsheng",
        question: "您所在的部门有一个提升短期业绩的机会，但这可能会损害另一个部门的利益或影响公司长期品牌。您会？",
        options: [
            "A. 抓住机会，完成自己的业绩目标。",
            "B. 向领导说明情况，由领导定夺。",
            "C. 主动与另一个部门沟通，寻求一个共赢的方案。",
            "D. 放弃这个机会，并说明理由，倡导可持续的发展方式。"
        ],
        scores: [1, 2, 4, 3]
    },
    {
        id: 78,
        dimension: "gongsheng",
        question: "您的一项工作需要与一个外部小工作室合作，他们非常需要我们这个项目来打响名气。在谈判中，您会？",
        options: [
            "A. 利用我方优势，极力压低价格。",
            "B. 按市场公允价格合作。",
            "C. 在公允价格基础上，给予一些合理的优惠和支持，帮助其成长。",
            "D. 视其为潜在的生态伙伴，用合理的价格换取其更投入、更高质量的协作，谋求长期合作可能。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 79,
        dimension: "gongsheng",
        question: "公司计划推行一项环保措施，需要各部门投入一定成本，长期才能见到社会和环境效益。您会？",
        options: [
            "A. 反对，因为增加了当期成本。",
            "B. 支持，但希望公司承担这部分成本。",
            "C. 支持，并愿意在本部门预算中消化这部分成本。",
            "D. 大力支持，并将其视为打造公司健康生态品牌、吸引志同道合者和客户的重要投资。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 80,
        dimension: "gongsheng",
        question: "您负责设计一个产品，有两个方案：方案一功能强大但开发周期长；方案二能满足基本需求但能快速上市。您会？",
        options: [
            "A. 推荐方案二，快速占领市场。",
            "B. 推荐方案一，追求完美产品。",
            "C. 分析市场窗口期和用户核心需求，做出平衡决策。",
            "D. 以方案一为终极目标，但规划分阶段实施的路线图，先推出方案二获取反馈，持续迭代。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 81,
        dimension: "gongsheng",
        question: "您发现可以通过一个灰色地带的操作，为部门带来可观收益且风险看似不大。您会？",
        options: [
            "A. 机会难得，果断操作。",
            "B. 评估风险后，再决定。",
            "C. 咨询法务或合规部门。",
            "D. 直接放弃，因为违背企业健康、诚信的底线，长期危害巨大。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 82,
        dimension: "gongsheng",
        question: "在制定年度预算时，您会如何分配员工培训与发展这项费用？",
        options: [
            "A. 尽量压缩，这是成本。",
            "B. 保持与去年持平。",
            "C. 根据业务发展需要，酌情增加。",
            "D. 将其视为对人力资本的投资，优先保障，因为员工成长是企业发展的根本。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 83,
        dimension: "gongsheng",
        question: "您的一个下属/同事提出了一个看似异想天开的长期建议，与当前业务关联不大。您会？",
        options: [
            "A. 直接否决，不切实际。",
            "B. 鼓励其想法，但告知目前无法实施。",
            "C. 与他/她深入探讨，挖掘其想法背后的洞察和价值。",
            "D. 在C的基础上，鼓励他/她在不影响主业的情况下做一些初步的研究和探索。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 84,
        dimension: "gongsheng",
        question: "面对一个激烈的市场竞争，竞争对手开始通过降低服务质量来打价格战。您会建议公司？",
        options: [
            "A. 跟进降价，保住市场份额。",
            "B. 维持原价，强调我们的质量。",
            "C. 开发一个更经济的子品牌或产品线来应对。",
            "D. 坚守品质与服务，同时向客户清晰传递我们创造的长期价值，吸引和留住认同我们的客户。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 85,
        dimension: "gongsheng",
        question: "您如何理解企业的财务健康？",
        options: [
            "A. 有充足的现金流和利润。",
            "B. 负债率保持在合理水平。",
            "C. 具备抵抗市场波动的能力。",
            "D. 在A/B/C的基础上，能够为长期的战略投入和可持续发展提供资金保障，不因短期压力牺牲未来。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 86,
        dimension: "gongsheng",
        question: "您负责的业务线，有一个机会可以通过牺牲部分客户体验来快速提升利润率。您会？",
        options: [
            "A. 抓住机会，利润是关键。",
            "B. 小幅尝试，观察客户反应。",
            "C. 拒绝，客户体验是我们的根本。",
            "D. 寻找不损害客户体验甚至能提升体验的利润增长方式，即使慢一些。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 87,
        dimension: "gongsheng",
        question: "公司倡导健康即日常，计划投入改善员工食堂饮食，这会增加成本。您如何看待这项投入？",
        options: [
            "A. 福利虽好，但成本敏感。",
            "B. 这是员工应得的福利。",
            "C. 这能提升员工满意度和健康水平，间接提升工作效率。",
            "D. 这是对员工健康这一核心资本的投资，是构建健康生态的重要一环，值得投入。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 88,
        dimension: "gongsheng",
        question: "在评估一个投资项目时，除了财务回报，您还会最关注？",
        options: [
            "A. 项目的风险大小。",
            "B. 项目与公司现有业务的协同效应。",
            "C. 项目对提升公司品牌形象和社会声誉的贡献。",
            "D. 项目是否有助于完善公司的健康生态布局，增强整体竞争力。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 89,
        dimension: "gongsheng",
        question: "您发现可以完成一个能带来亮眼业绩的任务，但会消耗掉团队大量精力，影响下一个更重要周期的准备。您会？",
        options: [
            "A. 先完成眼前业绩。",
            "B. 请示上级决定。",
            "C. 适当控制本次任务的投入，为下一周期保存实力。",
            "D. 向团队阐明两个任务的轻重缓急，激励团队克服困难，做好平衡，力争双赢。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 90,
        dimension: "gongsheng",
        question: "您认为企业与社会的关系应该是？",
        options: [
            "A. 企业为社会创造就业和税收。",
            "B. 企业在发展中要尽到社会责任。",
            "C. 企业的成功离不开社会的支持，应主动回馈社会。",
            "D. 企业的经营与社会发展是共生关系，企业的核心业务就应致力于解决社会问题，实现商业价值与社会价值的统一。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 91,
        dimension: "gongsheng",
        question: "在推进一个项目时，您更倾向于？",
        options: [
            "A. 用最成熟、最保险的方案。",
            "B. 尝试一些新的、但有风险的技术和方法。",
            "C. 在关键环节采用成熟方案，在非关键环节尝试创新。",
            "D. 系统评估后，在风险可控的前提下，大胆采用能带来长期竞争优势的创新。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 92,
        dimension: "gongsheng",
        question: "您如何对待工作中积累的客户数据？",
        options: [
            "A. 仅在完成本职工作必需时使用。",
            "B. 在法律允许范围内挖掘其商业价值。",
            "C. 严格保护客户隐私，绝不滥用。",
            "D. 在C的基础上，思考如何通过提供更优质的服务，让客户自愿授权我们使用数据为其创造更多价值。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 93,
        dimension: "gongsheng",
        question: "当短期KPI与长期品牌建设发生冲突时，您会？",
        options: [
            "A. 优先完成KPI。",
            "B. 优先考虑品牌建设。",
            "C. 尽力寻找两者之间的平衡点。",
            "D. 向上级阐明冲突，争取调整KPI或获取资源支持，以确保长期利益不受损。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 94,
        dimension: "gongsheng",
        question: "您认为桃李健康的各个业务板块（地产、健康、酒店）之间应该是什么关系？",
        options: [
            "A. 独立运营，各自发展。",
            "B. 资源共享，互相支持。",
            "C. 客户导流，交叉销售。",
            "D. 构建一个彼此赋能、价值循环的生态系统，共同为用户提供覆盖全生命周期的健康生活解决方案。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 95,
        dimension: "gongsheng",
        question: "在人才任用上，您更看重？",
        options: [
            "A. 其过往的业绩和经验。",
            "B. 其当下的能力和技能。",
            "C. 其未来的潜力和文化契合度。",
            "D. 建立一个能让不同特质的人才都能成长并发挥作用的机制，形成人才生态。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 96,
        dimension: "gongsheng",
        question: "您如何应对市场上的短期流行或风口？",
        options: [
            "A. 快速跟进，抓住机会。",
            "B. 冷静观察，不轻易跟随。",
            "C. 分析其与自身核心能力的匹配度，选择性跟进。",
            "D. 坚持自己的战略定力，围绕健康生态核心进行创新，不为短期风口所动。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 97,
        dimension: "gongsheng",
        question: "您负责的项目产生了一笔意外盈余。您会建议？",
        options: [
            "A. 作为奖金发放给项目组成员。",
            "B. 计入部门利润。",
            "C. 投入到本项目团队的建设和能力提升中。",
            "D. 投入到公司层面更具长期战略意义的项目或用于弥补其他创新项目的亏损。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 98,
        dimension: "gongsheng",
        question: "当您个人的职业发展目标与公司当前的战略重点出现短期偏差时，您会？",
        options: [
            "A. 以个人目标为重。",
            "B. 以公司战略为重。",
            "C. 暂时搁置个人目标。",
            "D. 与上级沟通，寻找能将个人成长与公司战略相结合的最佳路径，实现双赢。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 99,
        dimension: "gongsheng",
        question: "服务万千的家庭，以专业服务实现覆盖全生命周期的健康人生。对此，您理解为？",
        options: [
            "A. 这是我们的一句宣传口号。",
            "B. 这是我们所有业务发展的共同目标。",
            "C. 这要求我们的各项服务要能够无缝衔接，形成闭环。",
            "D. 这要求我们必须建立跨业务的协同机制和统一的服务标准，真正构建起支撑这一承诺的健康生态系统。"
        ],
        scores: [1, 2, 3, 4]
    },
    {
        id: 100,
        dimension: "gongsheng",
        question: "您认为成为最具价值的健康生态运营商中，价值最重要的内涵是？",
        options: [
            "A. 公司的市值和盈利能力。",
            "B. 我们为客户创造的健康价值。",
            "C. 我们为员工、伙伴、社会创造的综合价值。",
            "D. 我们构建的生态系统所孕育的、持续产生巨大商业价值和社会价值的能力。"
        ],
        scores: [1, 2, 3, 4]
    }
];

// 应用状态
let appState = {
    currentPage: "userLogin",
    currentUser: null,
    isAdmin: false,
    assessment: {
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
        startTime: null,
        endTime: null
    },
    results: []
};

// 初始化应用
function initApp() {
    // 从本地存储加载数据
    const savedResults = localStorage.getItem("assessmentResults");
    if (savedResults) {
        appState.results = JSON.parse(savedResults);
    }
    
    // 设置事件监听器
    document.getElementById("userLoginBtn").addEventListener("click", handleUserLogin);
    document.getElementById("startAssessmentBtn").addEventListener("click", startAssessment);
    document.getElementById("prevBtn").addEventListener("click", showPreviousQuestion);
    document.getElementById("nextBtn").addEventListener("click", showNextQuestion);
    document.getElementById("logoutBtn").addEventListener("click", handleLogout);
    document.getElementById("adminLoginBtn").addEventListener("click", handleAdminLogin);
    document.getElementById("adminLogoutBtn").addEventListener("click", handleAdminLogout);
    document.getElementById("filterBtn").addEventListener("click", filterResults);
    document.getElementById("refreshDataBtn").addEventListener("click", refreshAdminData);
    document.getElementById("exportDataBtn").addEventListener("click", exportData);
    document.getElementById("adminAccessBtn").addEventListener("click", showAdminLogin);
    document.getElementById("navAdminBtn").addEventListener("click", showAdminLogin);
    document.getElementById("floatAdminBtn").addEventListener("click", showAdminLogin);
    document.getElementById("backToUserLogin").addEventListener("click", showUserLogin);
    
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        showPage("adminLogin");
    } else {
        showPage(appState.currentPage);
    }
}

// 显示指定页面
function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll("div[id$='Page']").forEach(page => {
        page.classList.add("hidden");
    });
    
    // 显示指定页面
    document.getElementById(pageName + "Page").classList.remove("hidden");
    
    // 更新导航栏显示
    const userInfo = document.getElementById("userInfo");
    const adminAccess = document.getElementById("adminAccess");
    const floatAdminBtn = document.getElementById("floatAdminBtn");
    
    if (pageName === "admin" || (appState.currentUser && pageName !== "userLogin")) {
        userInfo.classList.remove("hidden");
        if (appState.isAdmin) {
            document.getElementById("userName").textContent = "管理员";
            adminAccess.classList.add("hidden");
        } else if (appState.currentUser) {
            document.getElementById("userName").textContent = appState.currentUser.name;
            adminAccess.classList.add("hidden");
        }
    } else {
        userInfo.classList.add("hidden");
        if (pageName === "userLogin" || pageName === "adminLogin") {
            adminAccess.classList.remove("hidden");
            floatAdminBtn.classList.remove("hidden");
        } else {
            adminAccess.classList.add("hidden");
            floatAdminBtn.classList.add("hidden");
        }
    }
    
    // 页面特定初始化
    if (pageName === "admin") {
        initAdminPage();
    }
}

// 显示用户登录页面
function showUserLogin() {
    showPage("userLogin");
}

// 显示管理员登录页面
function showAdminLogin() {
    showPage("adminLogin");
}

// 处理用户登录
function handleUserLogin() {
    const userType = document.getElementById("userType").value;
    const userName = document.getElementById("userNameInput").value;
    const userId = document.getElementById("userIdInput").value;
    const userDept = document.getElementById("userDeptInput").value;
    
    if (!userName || !userId || !userDept) {
        alert("请填写所有信息");
        return;
    }
    
    appState.currentUser = {
        type: userType,
        name: userName,
        id: userId,
        dept: userDept
    };
    
    showPage("assessmentIntro");
}

// 开始测评
function startAssessment() {
    // 确保每个维度都有题目
    const dimensions = ["yueji", "lita", "tongqi", "gongsheng"];
    const questionsByDimension = {};
    
    dimensions.forEach(dim => {
        questionsByDimension[dim] = questionBank.filter(q => q.dimension === dim);
    });
    
    // 从每个维度随机选择题目
    const selectedQuestions = [];
    const questionsPerDimension = 6; // 每个维度6题，共24题
    
    dimensions.forEach(dim => {
        const shuffled = [...questionsByDimension[dim]].sort(() => 0.5 - Math.random());
        selectedQuestions.push(...shuffled.slice(0, questionsPerDimension));
    });
    
    // 再随机选择1题，总共25题
    const remainingQuestions = questionBank.filter(q => !selectedQuestions.includes(q));
    const extraQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    if (extraQuestion) {
        selectedQuestions.push(extraQuestion);
    }
    
    // 打乱题目顺序
    appState.assessment.questions = selectedQuestions.sort(() => 0.5 - Math.random());
    appState.assessment.currentQuestionIndex = 0;
    appState.assessment.answers = [];
    appState.assessment.startTime = new Date();
    
    showPage("assessment");
    showQuestion(0);
}

// 显示题目
function showQuestion(index) {
    const question = appState.assessment.questions[index];
    const container = document.getElementById("questionContainer");
    const counter = document.getElementById("questionCounter");
    const progressBar = document.getElementById("progressBar");
    
    // 更新进度
    const progress = ((index + 1) / appState.assessment.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);
    counter.textContent = `题目 ${index + 1}/${appState.assessment.questions.length}`;
    
    // 构建题目HTML
    let html = `<h5 class="mb-4">${question.question}</h5>`;
    html += '<div class="options-container">';
    
    question.options.forEach((option, i) => {
        const isSelected = appState.assessment.answers[index] === i;
        html += `
            <div class="option-item ${isSelected ? 'selected' : ''}" data-index="${i}">
                ${option}
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // 添加选项点击事件
    document.querySelectorAll(".option-item").forEach(item => {
        item.addEventListener("click", function() {
            // 移除其他选项的选中状态
            document.querySelectorAll(".option-item").forEach(opt => {
                opt.classList.remove("selected");
            });
            
            // 设置当前选项为选中状态
            this.classList.add("selected");
            
            // 保存答案
            appState.assessment.answers[index] = parseInt(this.getAttribute("data-index"));
            
            // 启用下一题按钮
            document.getElementById("nextBtn").disabled = false;
        });
    });
    
    // 更新按钮状态
    document.getElementById("prevBtn").disabled = index === 0;
    
    if (index === appState.assessment.questions.length - 1) {
        document.getElementById("nextBtn").textContent = "提交测评";
    } else {
        document.getElementById("nextBtn").textContent = "下一题";
    }
}

// 显示上一题
function showPreviousQuestion() {
    if (appState.assessment.currentQuestionIndex > 0) {
        appState.assessment.currentQuestionIndex--;
        showQuestion(appState.assessment.currentQuestionIndex);
    }
}

// 显示下一题或提交测评
function showNextQuestion() {
    // 检查是否已回答当前题目
    if (appState.assessment.answers[appState.assessment.currentQuestionIndex] === undefined) {
        alert("请选择答案后再继续");
        return;
    }
    
    if (appState.assessment.currentQuestionIndex < appState.assessment.questions.length - 1) {
        appState.assessment.currentQuestionIndex++;
        showQuestion(appState.assessment.currentQuestionIndex);
    } else {
        // 提交测评
        submitAssessment();
    }
}

// 提交测评
function submitAssessment() {
    appState.assessment.endTime = new Date();
    
    // 计算得分
    const scores = {
        yueji: 0,
        lita: 0,
        tongqi: 0,
        gongsheng: 0
    };
    
    let yuejiCount = 0, litaCount = 0, tongqiCount = 0, gongshengCount = 0;
    
    appState.assessment.questions.forEach((question, index) => {
        const answerIndex = appState.assessment.answers[index];
        const score = question.scores[answerIndex];
        
        scores[question.dimension] += score;
        
        // 计数每个维度的题目数
        switch(question.dimension) {
            case "yueji": yuejiCount++; break;
            case "lita": litaCount++; break;
            case "tongqi": tongqiCount++; break;
            case "gongsheng": gongshengCount++; break;
        }
    });
    
    // 计算平均分并转换为百分比
    const maxScorePerQuestion = 4;
    const dimensionScores = {
        yueji: yuejiCount > 0 ? (scores.yueji / (yuejiCount * maxScorePerQuestion)) * 100 : 0,
        lita: litaCount > 0 ? (scores.lita / (litaCount * maxScorePerQuestion)) * 100 : 0,
        tongqi: tongqiCount > 0 ? (scores.tongqi / (tongqiCount * maxScorePerQuestion)) * 100 : 0,
        gongsheng: gongshengCount > 0 ? (scores.gongsheng / (gongshengCount * maxScorePerQuestion)) * 100 : 0
    };
    
    // 计算总体匹配度
    const totalScore = (dimensionScores.yueji + dimensionScores.lita + dimensionScores.tongqi + dimensionScores.gongsheng) / 4;
    
    // 保存结果
    const result = {
        user: appState.currentUser,
        scores: dimensionScores,
        overallScore: totalScore,
        date: new Date().toLocaleString(),
        answers: appState.assessment.answers.map((answer, index) => {
            return {
                questionId: appState.assessment.questions[index].id,
                answerIndex: answer
            };
        })
    };
    
    appState.results.push(result);
    localStorage.setItem("assessmentResults", JSON.stringify(appState.results));
    
    // 显示结果
    showResult(result);
}

// 显示测评结果
function showResult(result) {
    // 更新基本信息
    document.getElementById("resultUserName").textContent = result.user.name;
    document.getElementById("resultUserId").textContent = result.user.id;
    document.getElementById("resultUserType").textContent = result.user.type === "employee" ? "在职员工" : "应聘者";
    document.getElementById("resultUserDept").textContent = result.user.dept;
    document.getElementById("resultDate").textContent = result.date;
    
    // 更新总体匹配度
    document.getElementById("overallScore").textContent = `${Math.round(result.overallScore)}%`;
    
    let overallLevel, overallDesc;
    if (result.overallScore >= 80) {
        overallLevel = "高度匹配";
        overallDesc = "您与桃李健康的企业文化高度契合，是理想的桃李家人。";
        document.getElementById("overallScore").className = "display-4 text-success mb-3";
    } else if (result.overallScore >= 60) {
        overallLevel = "中度匹配";
        overallDesc = "您与桃李健康的企业文化基本契合，在某些方面还有提升空间。";
        document.getElementById("overallScore").className = "display-4 text-warning mb-3";
    } else {
        overallLevel = "低度匹配";
        overallDesc = "您与桃李健康的企业文化存在一定差异，需要重点关注文化适应。";
        document.getElementById("overallScore").className = "display-4 text-danger mb-3";
    }
    
    document.getElementById("overallLevel").textContent = overallLevel;
    document.getElementById("overallDesc").textContent = overallDesc;
    
    // 更新各维度分数
    const dimensions = ["yueji", "lita", "tongqi", "gongsheng"];
    const dimensionNames = {
        yueji: "悦己",
        lita: "利他",
        tongqi: "同栖",
        gongsheng: "共生"
    };
    
    dimensions.forEach(dim => {
        const scoreElement = document.getElementById(`${dim}Score`);
        const score = Math.round(result.scores[dim]);
        scoreElement.querySelector(".h4").textContent = `${score}%`;
        
        // 设置颜色类
        scoreElement.className = "dimension-score";
        if (score >= 80) {
            scoreElement.classList.add("high");
        } else if (score >= 60) {
            scoreElement.classList.add("medium");
        } else {
            scoreElement.classList.add("low");
        }
    });
    
    // 生成雷达图
    generateRadarChart(result.scores);
    
    // 生成详细分析和改进建议
    generateDimensionAnalysis(result.scores);
    generateImprovementSuggestions(result.scores);
    
    showPage("result");
}

// 生成雷达图
function generateRadarChart(scores) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    // 如果已有图表实例，先销毁
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }
    
    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['悦己', '利他', '同栖', '共生'],
            datasets: [{
                label: '文化匹配度',
                data: [
                    Math.round(scores.yueji),
                    Math.round(scores.lita),
                    Math.round(scores.tongqi),
                    Math.round(scores.gongsheng)
                ],
                backgroundColor: 'rgba(44, 124, 108, 0.2)',
                borderColor: 'rgba(44, 124, 108, 1)',
                pointBackgroundColor: 'rgba(44, 124, 108, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(44, 124, 108, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// 生成各维度详细分析
function generateDimensionAnalysis(scores) {
    const container = document.getElementById("dimensionAnalysis");
    let html = "";
    
    const analyses = {
        yueji: {
            high: "您展现出强烈的内在驱动力和自我提升意愿，能够主动追求卓越，符合桃李健康对员工自我成长的要求。",
            medium: "您有一定的自我驱动力，但在主动追求卓越和持续学习方面还有提升空间。",
            low: "您需要加强自我驱动和持续学习的能力，提升对工作的热情和投入度。"
        },
        lita: {
            high: "您具备出色的同理心和服务精神，能够换位思考，主动帮助他人，符合桃李健康的利他价值观。",
            medium: "您有一定的同理心和服务意识，但在主动帮助他人和换位思考方面还可以进一步加强。",
            low: "您需要提升同理心和服务意识，学会更多地从他人角度思考问题。"
        },
        tongqi: {
            high: "您展现出优秀的团队协作精神和归属感，能够开放沟通、共建共享，符合桃李健康的同栖文化。",
            medium: "您有一定的团队协作意识，但在开放沟通和共建共享方面还有提升空间。",
            low: "您需要加强团队协作意识和归属感，学会更开放地沟通和分享。"
        },
        gongsheng: {
            high: "您具备全局观念和长远眼光，能够平衡各方利益，追求可持续发展，符合桃李健康的共生理念。",
            medium: "您有一定的全局观念，但在长远规划和可持续发展思考方面还可以进一步加强。",
            low: "您需要提升全局观念和长远眼光，学会从更宏观的角度思考问题。"
        }
    };
    
    Object.keys(scores).forEach(dim => {
        const score = scores[dim];
        let level;
        if (score >= 80) level = "high";
        else if (score >= 60) level = "medium";
        else level = "low";
        
        const dimName = {
            yueji: "悦己",
            lita: "利他",
            tongqi: "同栖",
            gongsheng: "共生"
        }[dim];
        
        html += `
            <div class="mb-3">
                <h6>${dimName} (${Math.round(score)}%)</h6>
                <p class="small">${analyses[dim][level]}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 生成改进建议
function generateImprovementSuggestions(scores) {
    const container = document.getElementById("improvementSuggestions");
    let html = "";
    
    // 找出得分最低的两个维度
    const dimensionScores = Object.entries(scores).map(([dim, score]) => ({ dim, score }));
    dimensionScores.sort((a, b) => a.score - b.score);
    const lowestDimensions = dimensionScores.slice(0, 2);
    
    const suggestions = {
        yueji: [
            "设定明确的个人发展目标，定期评估进展",
            "主动寻求挑战性任务，走出舒适区",
            "培养持续学习的习惯，关注行业动态",
            "建立自我激励机制，庆祝小成就"
        ],
        lita: [
            "练习主动倾听，理解他人需求和感受",
            "在团队中主动提供帮助，不求回报",
            "培养同理心，尝试从他人角度思考问题",
            "关注客户/同事反馈，持续改进服务"
        ],
        tongqi: [
            "积极参与团队活动，增强归属感",
            "练习开放沟通，分享想法和资源",
            "在冲突中寻求共赢解决方案",
            "认可和欣赏团队成员的贡献"
        ],
        gongsheng: [
            "思考决策的长期影响，避免短视行为",
            "关注行业趋势和公司战略方向",
            "在决策时考虑各方利益平衡",
            "培养可持续发展思维，关注环境和社会责任"
        ]
    };
    
    lowestDimensions.forEach(item => {
        const dimName = {
            yueji: "悦己",
            lita: "利他",
            tongqi: "同栖",
            gongsheng: "共生"
        }[item.dim];
        
        html += `
            <div class="mb-3">
                <h6>${dimName}维度改进建议：</h6>
                <ul>
                    ${suggestions[item.dim].map(suggestion => `<li>${suggestion}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 处理退出
function handleLogout() {
    appState.currentUser = null;
    appState.isAdmin = false;
    showPage("userLogin");
}

// 处理管理员登录
function handleAdminLogin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    
    // 简单验证 - 实际应用中应有更安全的验证机制
    if (username === "admin" && password === "taoli2024") {
        appState.isAdmin = true;
        showPage("admin");
    } else {
        alert("用户名或密码错误");
    }
}

// 处理管理员退出
function handleAdminLogout() {
    appState.isAdmin = false;
    showPage("userLogin");
}

// 初始化管理页面
function initAdminPage() {
    refreshAdminData();
}

// 刷新管理页面数据
function refreshAdminData() {
    // 更新统计数据
    document.getElementById("totalAssessments").textContent = appState.results.length;
    
    const employees = appState.results.filter(r => r.user.type === "employee");
    const candidates = appState.results.filter(r => r.user.type === "candidate");
    
    document.getElementById("employeeCount").textContent = employees.length;
    document.getElementById("candidateCount").textContent = candidates.length;
    
    const avgScore = appState.results.length > 0 ? 
        appState.results.reduce((sum, r) => sum + r.overallScore, 0) / appState.results.length : 0;
    document.getElementById("avgMatchScore").textContent = `${Math.round(avgScore)}%`;
    
    // 更新结果表格
    updateResultsTable(appState.results);
}

// 更新结果表格
function updateResultsTable(results) {
    const tbody = document.getElementById("resultsTableBody");
    tbody.innerHTML = "";
    
    results.forEach((result, index) => {
        const tr = document.createElement("tr");
        
        tr.innerHTML = `
            <td>${result.user.name}</td>
            <td>${result.user.id}</td>
            <td>${result.user.type === "employee" ? "在职员工" : "应聘者"}</td>
            <td>${result.user.dept}</td>
            <td>${result.date}</td>
            <td>${Math.round(result.overallScore)}%</td>
            <td>${Math.round(result.scores.yueji)}%</td>
            <td>${Math.round(result.scores.lita)}%</td>
            <td>${Math.round(result.scores.tongqi)}%</td>
            <td>${Math.round(result.scores.gongsheng)}%</td>
            <td>
                <button class="btn btn-sm btn-outline-primary view-detail" data-index="${index}">查看详情</button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // 添加查看详情按钮事件
    document.querySelectorAll(".view-detail").forEach(btn => {
        btn.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"));
            showDetailModal(appState.results[index]);
        });
    });
}

// 显示详细结果模态框
function showDetailModal(result) {
    const modalContent = document.getElementById("modalContent");
    
    let html = `
        <div class="row mb-4">
            <div class="col-md-6">
                <h5>基本信息</h5>
                <table class="table table-bordered">
                    <tr>
                        <th width="40%">姓名</th>
                        <td>${result.user.name}</td>
                    </tr>
                    <tr>
                        <th>编号</th>
                        <td>${result.user.id}</td>
                    </tr>
                    <tr>
                        <th>类型</th>
                        <td>${result.user.type === "employee" ? "在职员工" : "应聘者"}</td>
                    </tr>
                    <tr>
                        <th>部门/岗位</th>
                        <td>${result.user.dept}</td>
                    </tr>
                    <tr>
                        <th>测评时间</th>
                        <td>${result.date}</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6">
                <h5>总体匹配度</h5>
                <div class="text-center">
                    <div class="display-4 ${result.overallScore >= 80 ? 'text-success' : result.overallScore >= 60 ? 'text-warning' : 'text-danger'} mb-3">
                        ${Math.round(result.overallScore)}%
                    </div>
                    <div class="h5 mb-3">
                        ${result.overallScore >= 80 ? '高度匹配' : result.overallScore >= 60 ? '中度匹配' : '低度匹配'}
                    </div>
                </div>
            </div>
        </div>
        
        <h5 class="mb-3">各维度匹配度</h5>
        <div class="row mb-4">
    `;
    
    const dimensions = [
        { key: "yueji", name: "悦己", score: result.scores.yueji },
        { key: "lita", name: "利他", score: result.scores.lita },
        { key: "tongqi", name: "同栖", score: result.scores.tongqi },
        { key: "gongsheng", name: "共生", score: result.scores.gongsheng }
    ];
    
    dimensions.forEach(dim => {
        let levelClass;
        if (dim.score >= 80) levelClass = "high";
        else if (dim.score >= 60) levelClass = "medium";
        else levelClass = "low";
        
        html += `
            <div class="col-md-3">
                <div class="dimension-score ${levelClass}">
                    <h6>${dim.name}</h6>
                    <div class="h4">${Math.round(dim.score)}%</div>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // 生成雷达图
    html += `
        <div class="row mb-4">
            <div class="col-md-8">
                <h5>文化匹配度雷达图</h5>
                <div class="radar-chart-container">
                    <canvas id="modalRadarChart"></canvas>
                </div>
            </div>
            <div class="col-md-4">
                <h5>详细分析</h5>
                <div id="modalDimensionAnalysis">
                </div>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = html;
    
    // 生成模态框中的雷达图
    const ctx = document.getElementById('modalRadarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['悦己', '利他', '同栖', '共生'],
            datasets: [{
                label: '文化匹配度',
                data: [
                    Math.round(result.scores.yueji),
                    Math.round(result.scores.lita),
                    Math.round(result.scores.tongqi),
                    Math.round(result.scores.gongsheng)
                ],
                backgroundColor: 'rgba(44, 124, 108, 0.2)',
                borderColor: 'rgba(44, 124, 108, 1)',
                pointBackgroundColor: 'rgba(44, 124, 108, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(44, 124, 108, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
    
    // 生成详细分析
    generateModalDimensionAnalysis(result.scores);
    
    // 显示模态框
    const modal = new bootstrap.Modal(document.getElementById('detailModal'));
    modal.show();
}

// 生成模态框中的详细分析
function generateModalDimensionAnalysis(scores) {
    const container = document.getElementById("modalDimensionAnalysis");
    let html = "";
    
    const analyses = {
        yueji: {
            high: "展现出强烈的内在驱动力和自我提升意愿。",
            medium: "有一定的自我驱动力，但还有提升空间。",
            low: "需要加强自我驱动和持续学习的能力。"
        },
        lita: {
            high: "具备出色的同理心和服务精神。",
            medium: "有一定的同理心和服务意识，但还可以加强。",
            low: "需要提升同理心和服务意识。"
        },
        tongqi: {
            high: "展现出优秀的团队协作精神和归属感。",
            medium: "有一定的团队协作意识，但还有提升空间。",
            low: "需要加强团队协作意识和归属感。"
        },
        gongsheng: {
            high: "具备全局观念和长远眼光。",
            medium: "有一定的全局观念，但还可以加强。",
            low: "需要提升全局观念和长远眼光。"
        }
    };
    
    Object.keys(scores).forEach(dim => {
        const score = scores[dim];
        let level;
        if (score >= 80) level = "high";
        else if (score >= 60) level = "medium";
        else level = "low";
        
        const dimName = {
            yueji: "悦己",
            lita: "利他",
            tongqi: "同栖",
            gongsheng: "共生"
        }[dim];
        
        html += `
            <div class="mb-3">
                <h6>${dimName} (${Math.round(score)}%)</h6>
                <p class="small">${analyses[dim][level]}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 筛选结果
function filterResults() {
    const userType = document.getElementById("filterUserType").value;
    const dept = document.getElementById("filterDept").value.toLowerCase();
    const scoreRange = document.getElementById("filterScore").value;
    
    let filteredResults = [...appState.results];
    
    // 按用户类型筛选
    if (userType !== "all") {
        filteredResults = filteredResults.filter(r => r.user.type === userType);
    }
    
    // 按部门/岗位筛选
    if (dept) {
        filteredResults = filteredResults.filter(r => 
            r.user.dept.toLowerCase().includes(dept)
        );
    }
    
    // 按匹配度筛选
    if (scoreRange !== "all") {
        switch(scoreRange) {
            case "high":
                filteredResults = filteredResults.filter(r => r.overallScore >= 80);
                break;
            case "medium":
                filteredResults = filteredResults.filter(r => r.overallScore >= 60 && r.overallScore < 80);
                break;
            case "low":
                filteredResults = filteredResults.filter(r => r.overallScore < 60);
                break;
        }
    }
    
    updateResultsTable(filteredResults);
}

// 导出数据
function exportData() {
    // 简单实现 - 实际应用中可能需要更复杂的数据导出逻辑
    const dataStr = JSON.stringify(appState.results, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = '桃李健康文化匹配度测评数据.json';
    link.click();
}

// 初始化应用
document.addEventListener("DOMContentLoaded", initApp);
