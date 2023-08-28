"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

// react date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// react date rang css // 引入日期选择的样式
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateSelection() {
  // 用于存储所选日期范围的状态
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* 下拉按钮 */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <div className="text-[13px] font-medium text-secondary">
              {format(date[0].startDate, "dd/MM/yyy")}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-medium text-secondary">
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>
        {/* menu */}
        <Menu.Items className="drodown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0  rounded-[10px] overflow-hidden">
          <DateRange
            // 当日期范围发生变化时的回调函数，更新日期状态
            onChange={(item) => setDate([item.selection])}
            // 是否允许手动编辑日期输入框
            editableDateInputs={true}
            // 在第一次选择日期范围后是否移动范围
            moveRangeOnFirstSelection={false}
            // 所选日期范围，这里是之前定义的 date 状态
            ranges={date}
            // 定义选中范围的颜色，这里设置为红色
            rangeColors={["#ed1d24"]}
            // 最小可选日期为今天
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
}
