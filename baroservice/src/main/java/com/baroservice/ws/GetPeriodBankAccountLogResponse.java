
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetPeriodBankAccountLogResult" type="{http://ws.baroservice.com/}PagedBankAccountLog" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getPeriodBankAccountLogResult"
})
@XmlRootElement(name = "GetPeriodBankAccountLogResponse")
public class GetPeriodBankAccountLogResponse {

    @XmlElement(name = "GetPeriodBankAccountLogResult")
    protected PagedBankAccountLog getPeriodBankAccountLogResult;

    /**
     * getPeriodBankAccountLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedBankAccountLog }
     *     
     */
    public PagedBankAccountLog getGetPeriodBankAccountLogResult() {
        return getPeriodBankAccountLogResult;
    }

    /**
     * getPeriodBankAccountLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedBankAccountLog }
     *     
     */
    public void setGetPeriodBankAccountLogResult(PagedBankAccountLog value) {
        this.getPeriodBankAccountLogResult = value;
    }

}
