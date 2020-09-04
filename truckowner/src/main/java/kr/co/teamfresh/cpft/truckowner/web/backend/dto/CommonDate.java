package kr.co.teamfresh.cpft.truckowner.web.backend.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public abstract class CommonDate {
	private LocalDate createdAt;
	private LocalDate modifiedAt;
}